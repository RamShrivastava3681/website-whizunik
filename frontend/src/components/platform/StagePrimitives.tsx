import { cn } from "@/lib/utils";
import type { ProductScreen } from "@/lib/content";
import type { FloatCard } from "./platformContent";

/* ------------------------------------------------------------------ */
/* Ambient stage backdrop                                              */
/* ------------------------------------------------------------------ */

export const GridBackdrop = ({ className }: { className?: string }) => (
  <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
    <div
      className="absolute inset-0 opacity-[0.55]"
      style={{
        backgroundImage:
          "linear-gradient(to right, hsl(var(--border) / 0.55) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.55) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        maskImage: "radial-gradient(ellipse 90% 70% at 50% 45%, #000 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 45%, #000 40%, transparent 100%)",
      }}
    />
    <div className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.055] blur-[130px]" />
    <div className="absolute right-[8%] top-[16%] h-64 w-64 rounded-full bg-brand-teal/[0.06] blur-[90px]" />
  </div>
);

/* ------------------------------------------------------------------ */
/* Product window                                                      */
/* ------------------------------------------------------------------ */

type FloatingWindowProps = {
  screen: ProductScreen;
  label?: string;
  priority?: boolean;
  className?: string;
  compact?: boolean;
};

export const FloatingWindow = ({
  screen,
  label,
  priority = false,
  className,
  compact = false,
}: FloatingWindowProps) => (
  <div
    className={cn(
      "overflow-hidden rounded-lg border border-border bg-card shadow-[0_28px_70px_-32px_rgba(14,35,64,0.45)]",
      className,
    )}
  >
    <div className="flex items-center gap-2 border-b border-border/70 bg-surface-container/80 px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-border" />
      <span className="h-2 w-2 rounded-full bg-border" />
      <span className="h-2 w-2 rounded-full bg-border" />
      <span className="ml-2 truncate font-mono text-[9.5px] uppercase tracking-[0.12em] text-muted-foreground">
        {label ?? screen.title}
      </span>
    </div>
    <img
      src={`/assets/command/${screen.file}-1712.webp`}
      srcSet={`/assets/command/${screen.file}-900.webp 900w, /assets/command/${screen.file}-1712.webp 1712w`}
      sizes="(min-width: 1280px) 720px, (min-width: 1024px) 560px, 100vw"
      width={screen.width}
      height={screen.height}
      alt={screen.alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn("block h-auto w-full bg-white", compact && "object-cover")}
    />
  </div>
);

/* ------------------------------------------------------------------ */
/* Floating contextual cards                                           */
/* ------------------------------------------------------------------ */

const toneDot = {
  neutral: "bg-muted-foreground/45",
  teal: "bg-brand-teal",
  blue: "bg-primary",
};

export const FloatingCard = ({
  card,
  className,
  animate = false,
}: {
  card: FloatCard;
  className?: string;
  animate?: boolean;
}) => (
  <div
    className={cn(
      "w-[9.5rem] rounded-md border border-border/90 bg-card/95 px-3 py-2.5 shadow-[0_14px_34px_-22px_rgba(14,35,64,0.4)] backdrop-blur-[2px]",
      animate && "platform-float",
      className,
    )}
  >
    <div className="flex items-center gap-1.5">
      <span className={cn("h-1.5 w-1.5 rounded-full", toneDot[card.tone ?? "neutral"])} />
      <p className="truncate font-mono text-[8.5px] uppercase tracking-[0.1em] text-muted-foreground">
        {card.label}
      </p>
    </div>
    <p className="mt-1 text-[11.5px] font-semibold leading-snug text-foreground">{card.value}</p>
  </div>
);

/* ------------------------------------------------------------------ */
/* Connective line                                                     */
/* ------------------------------------------------------------------ */

export const ConnectionPath = ({
  d,
  className,
  dashed = true,
}: {
  d: string;
  className?: string;
  dashed?: boolean;
}) => (
  <path
    data-connection
    d={d}
    fill="none"
    stroke="hsl(var(--primary) / 0.45)"
    strokeWidth={1.1}
    strokeLinecap="round"
    strokeDasharray={dashed ? "5 6" : undefined}
    className={className}
  />
);

/* ------------------------------------------------------------------ */
/* Progress rail                                                       */
/* ------------------------------------------------------------------ */

export const ProgressRail = ({
  phases,
  current,
  progressRef,
}: {
  phases: { number: string; navLabel: string }[];
  current: number;
  progressRef: React.RefObject<HTMLSpanElement>;
}) => (
  <div className="pointer-events-none absolute inset-x-0 bottom-5 z-30">
    <div className="mx-auto flex w-full max-w-[1160px] items-center gap-4 px-5 sm:px-6 lg:px-8">
      <span className="w-[7.5rem] shrink-0 font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted-foreground whitespace-nowrap">
        {phases[current]?.number} / {String(phases.length).padStart(2, "0")} · {phases[current]?.navLabel}
      </span>
      <div className="relative h-px flex-1 bg-border">
        <span
          ref={progressRef}
          className="absolute inset-y-0 left-0 block bg-primary"
          style={{ width: "0%", transform: "translateY(-0.5px)", height: "2px" }}
        />
      </div>
      <span className="hidden shrink-0 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground sm:block">
        Scroll to explore
      </span>
    </div>
  </div>
);
