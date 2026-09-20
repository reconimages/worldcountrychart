import type { Theme } from "../lib/theme";
import { formatDate } from "../lib/chart";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";

export default function Header({
  query,
  onQuery,
  theme,
  onToggleTheme,
  lastRefresh,
}: {
  query: string;
  onQuery: (q: string) => void;
  theme: Theme;
  onToggleTheme: () => void;
  lastRefresh: string;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-base/90 backdrop-blur">
      <div className="mx-auto w-full max-w-5xl px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
              <span className="text-gold">World</span> Country Chart
            </h1>
            <p className="text-xs uppercase tracking-[0.2em] text-mute">
              Top country voices, worldwide
            </p>
            <p className="mt-1 text-[11px] text-mute">
              Updated {formatDate(lastRefresh)} · auto-refreshes daily
            </p>
          </div>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
        <div className="mt-3 flex justify-center md:justify-start">
          <SearchBar value={query} onChange={onQuery} />
        </div>
      </div>
    </header>
  );
}