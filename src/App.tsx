import { useMemo, useState } from "react";
import type { Artist } from "./data/artists";
import { getStoredTheme, toggleTheme } from "./lib/theme";
import type { Theme } from "./lib/theme";
import { loadChart } from "./lib/chart";
import Header from "./components/Header";
import PinnedRow from "./components/PinnedRow";
import ArtistRow from "./components/ArtistRow";
import Footer from "./components/Footer";

function matches(a: Artist, q: string): boolean {
  const t = q.trim().toLowerCase();
  if (!t) return true;
  return a.name.toLowerCase().includes(t) || a.country.toLowerCase().includes(t);
}

export default function App() {
  const [initial] = useState(loadChart);
  const artists = initial.artists;
  const lastRefresh = initial.lastRefresh;
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  const visible = useMemo(() => artists.filter((a) => matches(a, query)), [artists, query]);
  const pinned = visible.filter((a) => a.pinned);
  const rest = visible.filter((a) => !a.pinned);

  const handleQuery = (q: string) => setQuery(q);

  const handleToggleTheme = () => setTheme((prev) => toggleTheme(prev));

  return (
    <div className="flex min-h-screen flex-col bg-base text-ink">
      <Header
        query={query}
        onQuery={handleQuery}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        lastRefresh={lastRefresh}
      />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-16 sm:px-6">
        <PinnedRow artists={pinned} />

        <section className="mt-10" aria-label="Daily chart rankings">
          <div className="mb-4 flex items-center gap-3">
            <h2 className="font-serif text-lg font-bold uppercase tracking-widest text-gold">
              Chart
            </h2>
            <span aria-hidden="true" className="h-px flex-1 bg-edge" />
          </div>

          {visible.length === 0 ? (
            <p className="rounded-2xl border border-edge bg-panel px-4 py-14 text-center text-sm text-mute">
              No artists match that name.
            </p>
          ) : (
            <ol className="divide-y divide-edge rounded-2xl border border-edge bg-panel/50">
              {rest.map((a) => (
                <ArtistRow key={a.id} artist={a} />
              ))}
              {rest.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-mute">
                  Only pinned artists match — search wider to see the daily chart.
                </li>
              )}
            </ol>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}