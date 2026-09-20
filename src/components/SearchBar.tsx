import { useEffect, useState } from "react";

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (q: string) => void;
}) {
  const [local, setLocal] = useState(value);

  useEffect(() => {
    const id = window.setTimeout(() => onChange(local), 150);
    return () => window.clearTimeout(id);
  }, [local, onChange]);

  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="artist-search" className="sr-only">
        Search artists
      </label>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mute"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
      </svg>
      <input
        id="artist-search"
        type="search"
        role="searchbox"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        placeholder="Search artists…"
        autoComplete="off"
        spellCheck={false}
        className="w-full rounded-full border border-edge bg-panel/70 py-2.5 pl-10 pr-10 text-base text-ink placeholder:text-mute/70 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 sm:text-sm"
      />
      {local !== "" && (
        <button
          type="button"
          onClick={() => {
            setLocal("");
            onChange("");
          }}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-mute transition hover:bg-edge hover:text-ink"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      )}
    </div>
  );
}