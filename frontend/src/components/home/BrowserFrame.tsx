type BrowserFrameProps = {
  src: string;
  alt: string;
  label: string;
  tone?: "dark" | "light";
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

const BrowserFrame = ({
  src,
  alt,
  label,
  tone = "dark",
  priority = false,
  className = "",
  imageClassName = "",
}: BrowserFrameProps) => {
  const isDark = tone === "dark";

  return (
    <div
      className={`overflow-hidden rounded-xl border ${
        isDark
          ? "border-white/12 bg-[#0A1D38] shadow-[0_50px_140px_-50px_rgba(2,10,24,0.95)]"
          : "border-border bg-card shadow-panel"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-2 border-b px-3 py-2.5 ${
          isDark ? "border-white/10 bg-white/[0.04]" : "border-border bg-surface-container"
        }`}
      >
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#F87171]/80" />
          <span className="h-2 w-2 rounded-full bg-[#FBBF24]/80" />
          <span className="h-2 w-2 rounded-full bg-[#34D399]/80" />
        </span>
        <span
          className={`ml-2 truncate font-mono text-[10px] uppercase tracking-[0.14em] ${
            isDark ? "text-white/45" : "text-muted-foreground"
          }`}
        >
          {label}
        </span>
        <span
          className={`ml-auto hidden shrink-0 rounded border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] sm:inline ${
            isDark
              ? "border-white/15 text-white/40"
              : "border-border text-muted-foreground"
          }`}
        >
          Product UI
        </span>
      </div>

      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={`block h-auto w-full ${imageClassName}`}
      />
    </div>
  );
};

export default BrowserFrame;
