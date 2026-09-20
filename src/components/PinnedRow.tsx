import { Link } from "react-router-dom";
import type { Artist } from "../data/artists";
import ArtistPhoto from "./ArtistPhoto";

export default function PinnedRow({ artists }: { artists: Artist[] }) {
  if (artists.length === 0) return null;
  return (
    <section aria-label="Pinned chart leaders" className="mt-6">
      <div className="mb-3 flex items-center gap-3">
        <h2 className="font-serif text-sm font-bold uppercase tracking-widest text-gold">
          Pinned — Top of the chart
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-edge" />
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {artists.map((a) => (
          <Link
            key={a.id}
            to={`/artist/${a.id}`}
            aria-label={`View ${a.name}'s profile`}
            className="group flex items-center gap-3 rounded-2xl border border-edge bg-panel p-3 transition hover:border-gold/60 hover:bg-panel/80"
          >
            <span className="relative shrink-0">
              <ArtistPhoto
                src={a.photoUrl}
                alt={`${a.name} — country artist`}
                className="h-16 w-14 rounded-lg border border-edge object-cover sm:h-20 sm:w-16"
              />
              <span className="absolute -left-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full border border-gold bg-base font-serif text-[11px] font-bold text-gold">
                {a.rank}
              </span>
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-serif font-semibold leading-tight group-hover:text-gold-soft">
                {a.name}
              </span>
              <span className="block truncate text-[11px] font-medium uppercase tracking-wider text-mute">
                {a.country}
              </span>
            </span>
            <span className="shrink-0 rounded-full border border-gold/70 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-gold-soft">
              Pinned
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}