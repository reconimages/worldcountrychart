const FALLBACK = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="#241d14"/><circle cx="200" cy="172" r="70" fill="#4a3a28"/><path d="M92 500c12-94 58-132 108-132s96 38 108 132z" fill="#4a3a28"/><rect x="150" y="430" width="100" height="70" rx="6" fill="#c9a15c" opacity="0.35" transform="translate(0,-30)"/></svg>`
)}`;

export default function ArtistPhoto({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        const img = e.currentTarget;
        if (!img.src.startsWith("data:image/svg")) img.src = FALLBACK;
      }}
      className={className}
    />
  );
}