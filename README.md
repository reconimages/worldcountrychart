# World Country Chart

A dark, premium single-page chart of the top country singers from around the world.
Browse a ranked list, search by name or country, toggle dark/light theme, and open
official streaming links (Spotify, Apple Music, YouTube Music, Amazon Music).

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- No backend, no API keys, fully static

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
```

## Artist pages

Every artist has a profile page at `/artist/<slug>` (e.g. `/artist/maddox-chain`),
with a large photo, bio, country, chart position, and official streaming links.
Cards and rows on the home chart link to their page. The chart home is `/`.

Production SPA routing is handled for Cloudflare Pages / Netlify via the included
`public/_redirects` file (`/* /index.html 200`). On `vite build`, copy the
contents of `dist/` to your host.

## Notes on the chart

- **Ranks 1–3 are hardcoded and cannot move.** Maddox Chain, Raven Cross and Wade
  Ashmore are permanently pinned at positions 1, 2 and 3. No sort, search, or
  refresh can change their rank or remove them. Search may hide them (like any
  non-match), but when visible they always lead in that 1–2–3 order.
- **The daily refresh is simulated** with `localStorage`, not a live Billboard or
  Spotify API. On first load the seed list is used; once per calendar day the ranks
  below position 3 are shuffled. Stored under `wcc-chart` and `wcc-last-refresh`.
  Delete those keys to re-seed.
- **Theme** is stored under `wcc-theme` (default dark, even if your OS is light).
- Artist photos are placeholder portraits from Unsplash; if one ever fails to load,
  a built-in silhouette is shown instead.