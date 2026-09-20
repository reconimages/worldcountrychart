import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatDate, loadChart } from "../lib/chart";
import { getStoredTheme, toggleTheme } from "../lib/theme";
import type { Theme } from "../lib/theme";
import ArtistPhoto from "../components/ArtistPhoto";
import StreamingLinks from "../components/StreamingLinks";
import ThemeToggle from "../components/ThemeToggle";

export default function ArtistPage() {
  const { id } = useParams<{ id: string }>();
  const [state] = useState(loadChart);
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());
  const artist = state.artists.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = artist
      ? `${artist.name} — World Country Chart`
      : "Artist not found — World Country Chart";
  }, [artist]);

  if (!artist) {
    return (
      <div className="flex min-h-screen flex-col bg-base text-ink">
        <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-20 text-center sm:px-6">
          <p className="font-serif text-3xl font-bold text-gold">Artist not found</p>
          <p className="mt-2 text-sm text-mute">No artist matches that id.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2 text-sm font-medium text-gold-soft transition hover:bg-gold/15"
          >
            ← Back to the chart
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-base text-ink">
      <header className="sticky top-0 z-40 border-b border-edge bg-base/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="group flex items-center gap-2 text-sm font-medium text-gold-soft">
            <span aria-hidden="true" className="text-gold transition group-hover:-translate-x-0.5">
              ←
            </span>
            <span className="hidden sm:inline">Back to the chart</span>
            <span className="sm:hidden">Chart</span>
          </Link>
          <Link to="/" className="font-serif text-lg font-bold tracking-tight">
            <span className="text-gold">World</span> Country Chart
          </Link>
          <ThemeToggle
            theme={theme}
            onToggle={() => setTheme((prev) => toggleTheme(prev))}
          />
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-16 sm:px-6">
        <article className="mt-6 overflow-hidden rounded-3xl border border-edge bg-panel shadow-sm">
          <div className="relative">
            <ArtistPhoto
              src={artist.photoUrl}
              alt={`${artist.name} — country artist`}
              className="aspect-[16/10] w-full object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold bg-black/60 font-serif text-lg font-bold text-gold-soft">
                {artist.rank}
              </span>
              {artist.pinned && (
                <span className="rounded-full border border-gold/70 bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-soft">
                  Pinned
                </span>
              )}
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h1 className="font-serif text-3xl font-bold text-cream drop-shadow sm:text-4xl">
                {artist.name}
              </h1>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-cream/85">
                {artist.country}
              </p>
            </div>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_260px]">
            <div>
              <h2 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-gold">
                About
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink">{artist.bioShort}</p>

              <h2 className="mt-8 font-serif text-sm font-bold uppercase tracking-[0.2em] text-gold">
                Listen
              </h2>
              <StreamingLinks artist={artist} className="mt-3" />
              <p className="mt-2 text-xs text-mute">
                Streaming icons open the official {artist.name} pages in a new tab.
              </p>
            </div>

            <aside className="space-y-4 rounded-2xl border border-edge bg-base/60 p-5">
              <h2 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-gold">
                Chart position
              </h2>
              <div>
                <p className="font-serif text-4xl font-bold text-gold">#{artist.rank}</p>
                {!artist.pinned && (
                  <p className="mt-1 text-sm text-mute">
                    Slot in the daily country chart.
                  </p>
                )}
              </div>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-mute">Country</dt>
                  <dd className="font-medium">
{artist.country}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-mute">Updated</dt>
                  <dd className="font-medium">{formatDate(state.lastRefresh)}</dd>
                </div>
              </dl>
              <Link
                to="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-soft transition hover:bg-gold/20"
              >
                ← Back to full chart
              </Link>
            </aside>
          </div>
        </article>
      </main>
    </div>
  );
}