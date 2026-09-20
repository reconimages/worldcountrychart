import { Link } from "react-router-dom";
import type { Artist } from "../data/artists";
import ArtistPhoto from "./ArtistPhoto";
import StreamingLinks from "./StreamingLinks";

export default function ArtistRow({ artist }: { artist: Artist }) {
  const to = `/artist/${artist.id}`;
  return (
    <li className="flex items-center gap-2.5 rounded-xl border border-transparent px-2.5 py-2.5 transition hover:border-edge hover:bg-panel/70 sm:gap-4 sm:px-4 sm:py-3">
      <span className="w-7 shrink-0 text-right font-serif text-lg font-bold tabular-nums text-gold">
        {artist.rank}
      </span>
      <Link
        to={to}
        aria-label={`View ${artist.name}'s profile`}
        className="shrink-0 rounded-lg"
      >
        <ArtistPhoto
          src={artist.photoUrl}
          alt={`${artist.name} — country artist`}
          className="h-14 w-12 rounded-lg border border-edge object-cover transition hover:border-gold/60 sm:h-16 sm:w-14"
        />
      </Link>
      <div className="min-w-0 flex-1">
        <Link
          to={to}
          className="inline-block max-w-full rounded focus-visible:outline-2 focus-visible:outline-gold"
        >
          <p className="truncate font-serif text-lg font-semibold leading-tight hover:text-gold-soft">
            {artist.name}
          </p>
        </Link>
        <p className="truncate text-xs font-medium uppercase tracking-wider text-mute">
          {artist.country}
        </p>
      </div>
      <StreamingLinks artist={artist} className="shrink-0" />
    </li>
  );
}