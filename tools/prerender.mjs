import { build } from "esbuild";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const SITE = (process.env.SITE_URL || "https://world-country-chart.pages.dev").replace(/\/+$/, "");

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => `&${{ "&": "amp", "<": "lt", ">": "gt", '"': "quot", "'": "#39" }[c]}`);

const { SEED_ARTISTS: artists } = await (async () => {
  const out = await build({
    entryPoints: [join(root, "src/data/artists.ts")],
    bundle: true,
    format: "esm",
    write: false,
  });
  const tmp = join(tmpdir(), `wcc-artists-${Date.now()}.mjs`);
  writeFileSync(tmp, out.outputFiles[0].text);
  try {
    return await import(pathToFileURL(tmp).href);
  } finally {
    rmSync(tmp, { force: true });
  }
})();

const home = readFileSync(join(dist, "index.html"), "utf8");

const ld = (data) => `<script type="application/ld+json">${JSON.stringify(data)}</script>`;

function head({ title, description, url, image, jsonld }) {
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="World Country Chart" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    image ? `<meta property="og:image" content="${esc(image)}" />` : "",
    `<meta name="twitter:card" content="${image ? "summary_large_image" : "summary"}" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    image ? `<meta name="twitter:image" content="${esc(image)}" />` : "",
    jsonld,
  ].join("\n    ");
}

function inject(html, headBlock, rootHtml) {
  return html
    .replace(/<meta name="description"[^>]*>\s*/, "")
    .replace(/<title>[^<]*<\/title>\s*/, headBlock + "\n    ")
    .replace('<div id="root"></div>', `<div id="root">${rootHtml}</div>`);
}

// ---- artist pages ----
for (const a of artists) {
  const url = `${SITE}/artist/${a.id}`;
  const description = `${a.name}, ranked #${a.rank} on the World Country Chart. ${a.country}. ${a.bioShort} Listen on Spotify, Apple Music, YouTube Music and Amazon Music.`;
  const links = Object.values(a.links).filter(Boolean);
  const block = head({
    title: `${a.name} — World Country Chart`,
    description,
    url,
    image: a.photoUrl,
    jsonld: ld({
      "@context": "https://schema.org",
      "@type": "MusicGroup",
      name: a.name,
      description,
      image: a.photoUrl,
      url,
      genre: "Country",
      sameAs: links,
    }),
  });
  const body = [
    `<img src="${esc(a.photoUrl)}" alt="${esc(a.name)}" width="600" height="600" />`,
    `<h1>${esc(a.name)}</h1>`,
    `<p>Rank #${a.rank} · ${esc(a.country)} · World Country Chart</p>`,
    `<p>${esc(a.bioShort)}</p>`,
    `<h2>Listen</h2><ul>`,
    ...links.map((l) => `<li><a href="${esc(l)}">${esc(l.replace(/^https?:\/\/(www\.)?/, "").split("/")[0])}</a></li>`),
    `</ul>`,
    `<p><a href="${SITE}/">← Back to the World Country Chart</a></p>`,
  ].join("");
  const dir = join(dist, "artist", a.id);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), inject(home, block, body));
}

// ---- home page ----
const homeDesc =
  "World Country Chart — top country voices, worldwide. A daily chart of country singers from every corner of the globe.";
const homeBlock = head({
  title: "World Country Chart — Top Country Singers Worldwide",
  description: homeDesc,
  url: `${SITE}/`,
  image: artists[0].photoUrl,
  jsonld:
    ld({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "World Country Chart",
      url: `${SITE}/`,
    }) +
    "\n    " +
    ld({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "World Country Chart — Daily Rankings",
      itemListElement: artists.map((a) => ({
        "@type": "ListItem",
        position: a.rank,
        item: {
          "@type": "MusicGroup",
          name: a.name,
          image: a.photoUrl,
          url: `${SITE}/artist/${a.id}`,
          genre: "Country",
        },
      })),
    }),
});
const homeBody = [
  `<h1>World Country Chart</h1>`,
  `<p>${esc(homeDesc)}</p>`,
  `<ol>`,
  ...artists.map(
    (a) =>
      `<li><a href="/artist/${a.id}">${a.rank}. ${esc(a.name)} — ${esc(a.country)}</a></li>`
  ),
  `</ol>`,
].join("");
writeFileSync(join(dist, "index.html"), inject(home, homeBlock, homeBody));

// ---- sitemap + robots ----
const today = new Date().toISOString().slice(0, 10);
const urls = ["/", ...artists.map((a) => `/artist/${a.id}`)];
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod></url>`)
    .join("\n")}\n</urlset>\n`
);
writeFileSync(
  join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`
);

console.log(`prerendered ${artists.length} artist pages + home, sitemap, robots (${SITE})`);
