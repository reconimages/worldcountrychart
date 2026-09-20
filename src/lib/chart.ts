import { SEED_ARTISTS } from "../data/artists";
import type { Artist } from "../data/artists";

const CHART_KEY = "wcc-chart";
const REFRESH_KEY = "wcc-last-refresh";

export type ChartState = {
  artists: Artist[];
  lastRefresh: string;
};

export function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function sanitize(raw: Artist[]): Artist[] {
  const locked = SEED_ARTISTS.filter((a) => a.pinned).map((a) => ({ ...a, rank: a.rank }));
  const byId = new Map(SEED_ARTISTS.map((a) => [a.id, a]));
  const byName = new Map(SEED_ARTISTS.map((a) => [a.name.toLowerCase(), a]));
  const rest = raw
    .filter((a) => a && !a.pinned)
    .map((a) => {
      const fresh = byId.get(a.id) ?? byName.get(a.name.toLowerCase());
      return { ...a, pinned: false, photoUrl: fresh?.photoUrl ?? a.photoUrl };
    })
    .slice(0, SEED_ARTISTS.length - locked.length);
  return [
    ...locked,
    ...rest.map((a, i) => ({ ...a, rank: locked.length + 1 + i })),
  ];
}

function save(artists: Artist[], lastRefresh: string): void {
  try {
    localStorage.setItem(CHART_KEY, JSON.stringify(artists));
    localStorage.setItem(REFRESH_KEY, lastRefresh);
  } catch {
    // storage unavailable; session still works in-memory
  }
}

export function loadChart(): ChartState {
  const today = todayIso();
  const last = localStorage.getItem(REFRESH_KEY);
  const raw = localStorage.getItem(CHART_KEY);

  if (!raw || !last) {
    const artists = sanitize(SEED_ARTISTS);
    save(artists, today);
    return { artists, lastRefresh: today };
  }

  let saved: Artist[];
  try {
    saved = JSON.parse(raw) as Artist[];
    if (!Array.isArray(saved) || saved.length === 0) throw new Error("empty");
  } catch {
    const artists = sanitize(SEED_ARTISTS);
    save(artists, today);
    return { artists, lastRefresh: today };
  }

  const artists = sanitize(saved);
  if (last !== today) {
    const refreshed = dailyChart(artists, today);
    save(refreshed, today);
    return { artists: refreshed, lastRefresh: today };
  }
  return { artists, lastRefresh: last };
}

function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function dailyChart(artists: Artist[], day: string): Artist[] {
  const pinned = artists.filter((a) => a.pinned);
  const rest = seededShuffle(
    artists.filter((a) => !a.pinned),
    hashStr(`wcc:${day}`)
  );
  let rank = pinned.length + 1;
  return [...pinned, ...rest.map((a) => ({ ...a, rank: rank++ }))];
}

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}