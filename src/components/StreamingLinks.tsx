import type { Artist } from "../data/artists";

const btn =
  "grid h-8 w-8 place-items-center rounded-full border border-edge bg-panel/60 text-mute transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold sm:h-9 sm:w-9";

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.6 14.4a.62.62 0 0 1-.86.21c-2.35-1.44-5.32-1.76-8.8-.96a.63.63 0 1 1-.27-1.22c3.75-.86 7.02-.5 9.7 1.12.3.18.39.57.23.85zm1.23-2.72a.78.78 0 0 1-1.07.26c-2.7-1.66-6.8-2.14-9.98-1.17a.78.78 0 1 1-.46-1.49c3.62-1.11 8.12-.57 11.25 1.35.37.22.48.7.26 1.05zm.1-2.83C14.77 9.2 9.37 9.03 6.28 9.95a.93.93 0 1 1-.52-1.79c3.53-1.04 9.45-.86 13.25 1.58a.93.93 0 1 1-1.08 1.51z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M16.36 12.96c.03 3.15 2.76 4.2 2.79 4.21-.02.07-.44 1.5-1.44 2.97-.87 1.28-1.77 2.56-3.2 2.59-1.4.03-1.85-.83-3.45-.83-1.6 0-2.1.8-3.42.86-1.37.06-2.42-1.39-3.3-2.66C2.3 17.56.9 13.64 2.55 10.98a4.96 4.96 0 0 1 4.19-2.53c1.31-.03 2.55.89 3.35.89s1.8-1.1 3.03-1.1c.56 0 2.58.05 3.9 1.93-.1.06-2.32 1.35-2.66 3.79zM13.7 6.25c.72-.87 1.2-2.08 1.07-3.29-1.04.04-2.3.69-3.04 1.56-.67.77-1.25 2-1.1 3.18 1.16.09 2.35-.59 3.07-1.45z" />
  </svg>
);

const YouTubeMusicIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M21.6 7.25c-.2-.79-.83-1.41-1.61-1.61C18.19 5.2 12 5.2 12 5.2s-6.19 0-7.99.45c-.78.2-1.41.82-1.61 1.6C1.95 9.12 1.95 12 1.95 12s0 2.88.45 4.75c.2.79.83 1.41 1.61 1.61 1.8.45 7.99.45 7.99.45s6.19 0 7.99-.45c.78-.2 1.41-.82 1.61-1.6.45-1.87.45-4.76.45-4.76s0-2.88-.45-4.75zM9.91 15.15V8.85L15.5 12z" />
  </svg>
);

const AmazonMusicIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M16.7 3.1c-.3-.2-.7-.15-.9.1l-.95 1.25-.05.07c-.2.27-.07.65.26.79 2.85 1.2 5.35 2.92 5.35 5.11 0 1.5-1.15 2.9-2.4 3.53-.5.26-1.1-.17-.9-.7.2-.55.4-1.2.3-1.95-.2-1.45-1.75-2.85-4.15-3.28-.4-.08-.7-.44-.7-.85V4.1c0-.3-.1-.58-.35-.8L9.9 1.3c-.2-.22-.55-.22-.75 0L7.05 3.3c-.25.2-.35.5-.35.8v2.85c0 .4-.3.75-.7.85-2.4.43-3.95 1.83-4.15 3.28-.1.75.1 1.4.3 1.95-.2.5-.4.95.9.7 1.25-.63 2.4-2 2.4-3.53 0-2.2 2.5-3.9 5.35-5.1.33-.15.2-.53 0-.8l-.05-.07-.95-1.25c-.1-.28-.6-.33-.9-.1 0 0 4.7-3.35 7.6-.1zM12 10a4 4 0 0 0-4 4v5.99c0 .28.23.5.5.5H9c.28 0 .5-.22.5-.5V18h5v2a.5.5 0 0 0 .5.5h.5c.28 0 .5-.22.5-.5V14a4 4 0 0 0-4-4zm-2.5 5.5v-1.24c0-.4.3-.76.68-.76h3.64c.38 0 .68.3.68.75V15.5h-5z" />
  </svg>
);

const hoverStyles: Record<string, string> = {
  spotify: "hover:border-[#1DB954] hover:text-[#1DB954]",
  appleMusic: "hover:border-[#FA233B] hover:text-[#FA233B]",
  youtubeMusic: "hover:border-[#FF0000] hover:text-[#FF0000]",
  amazonMusic: "hover:border-[#FF9900] hover:text-[#FF9900]",
};

export default function StreamingLinks({ artist, className }: { artist: Artist; className?: string }) {
  const items = [
    { name: "spotify", platform: "Spotify", url: artist.links.spotify, icon: <SpotifyIcon />, color: "#1DB954", label: "Listen on Spotify" },
    { name: "appleMusic", platform: "Apple Music", url: artist.links.appleMusic, icon: <AppleIcon />, color: "#FA233B", label: "Listen on Apple Music" },
    { name: "youtubeMusic", platform: "YouTube Music", url: artist.links.youtubeMusic, icon: <YouTubeMusicIcon />, color: "#FF0000", label: "Listen on YouTube Music" },
    { name: "amazonMusic", platform: "Amazon Music", url: artist.links.amazonMusic, icon: <AmazonMusicIcon />, color: "#FF9900", label: "Listen on Amazon Music" },
  ] as const;

  return (
    <div className={`flex items-center gap-1.5 sm:gap-2 ${className ?? ""}`} role="group" aria-label={`Streaming links for ${artist.name}`}>
      {items.map((it) =>
        it.url ? (
          <a
            key={it.name}
            href={it.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${artist.name} on ${it.platform}`}
            aria-label={`${artist.name} — ${it.label} (opens in new tab)`}
            className={`${btn} ${hoverStyles[it.name]}`}
          >
            {it.icon}
          </a>
        ) : null
      )}
    </div>
  );
}