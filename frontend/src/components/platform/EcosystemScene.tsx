import { screens } from "@/lib/content";
import { cn } from "@/lib/utils";

const leftNodes = [
  { id: "sales", label: "Sales", screen: screens.sales },
  { id: "procurement", label: "Procurement", screen: screens.procurement },
  { id: "warehouse", label: "Warehouse", screen: screens.warehouse },
];

const rightNodes = [
  { id: "finance", label: "Finance", screen: screens.finance },
  { id: "workflow", label: "Workflow", screen: screens.workflow },
  { id: "inventory", label: "Inventory", screen: screens.forecast },
];

const paths = [
  "M328,34 C230,130 140,180 76,224",
  "M328,34 C230,100 140,130 80,168",
  "M672,34 C770,80 860,140 924,216",
  "M672,34 C770,120 860,170 920,232",
  "M328,34 C230,180 130,260 76,336",
  "M328,34 C230,120 130,170 76,232",
  "M672,34 C770,60 860,140 924,232",
  "M672,34 C770,180 870,260 924,336",
  "M328,34 C500,120 500,180 500,260",
  "M672,34 C800,130 800,180 800,270",
];

const MiniWindow = ({
  label,
  screen,
}: {
  label: string;
  screen: (typeof screens)[keyof typeof screens] | null;
}) => (
  <div
    data-eco-node
    className="w-[8.6rem] overflow-hidden rounded-md border border-border bg-card shadow-[0_18px_44px_-28px_rgba(14,35,64,0.5)] sm:w-[10rem] lg:w-[11rem]"
  >
    <div className="flex items-center gap-1.5 border-b border-border/70 bg-surface-container/70 px-2 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-border" />
      <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-muted-foreground">
        {label}
      </span>
    </div>
    {screen ? (
      <img
        src={`/assets/command/${screen.file}-900.webp`}
        width={screen.width}
        height={screen.height}
        alt={screen.alt}
        loading="lazy"
        decoding="async"
        className="block h-[4.1rem] w-full object-cover object-top opacity-90 sm:h-[4.8rem]"
      />
    ) : (
      <div className="flex h-[4.1rem] items-center justify-center bg-surface-container/60 sm:h-[4.8rem]">
        <svg viewBox="0 0 80 40" aria-hidden="true" className="h-8 w-20">
          <path
            d="M8 30 L24 18 L40 24 L56 10 L72 16"
            fill="none"
            stroke="hsl(var(--brand-teal))"
            strokeWidth="1.4"
          />
          <circle cx="24" cy="18" r="2.2" fill="hsl(var(--brand-teal))" />
          <circle cx="56" cy="10" r="2.2" fill="hsl(var(--primary))" />
        </svg>
      </div>
    )}
  </div>
);

const Identity = () => (
  <div className="relative z-10 w-[11.5rem] rounded-lg border border-border bg-card/95 p-4 text-center shadow-[0_24px_60px_-28px_rgba(14,35,64,0.5)] backdrop-blur-[2px]">
    <img
      src="/brand/whizunik-mark.png"
      alt=""
      aria-hidden="true"
      width={32}
      height={32}
      className="mx-auto h-8 w-8 object-contain"
    />
    <p className="mt-2 text-[12.5px] font-bold tracking-[-0.01em]">Whizunik Command</p>
    <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-muted-foreground">
      One transaction record
    </p>
    <div className="mt-3 flex items-center justify-center gap-1">
      <span className="h-1 w-1 rounded-full bg-brand-teal" />
      <span className="h-1 w-1 rounded-full bg-primary" />
      <span className="h-1 w-1 rounded-full bg-brand-teal" />
    </div>
  </div>
);

export const EcosystemScene = ({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) => {
  if (variant === "mobile") {
    return (
      <div>
        <div className="flex flex-col gap-3">
          {leftNodes.map((node) => (
            <MiniWindow key={node.id} label={node.label} screen={node.screen} />
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <Identity />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative h-[22rem] w-full sm:h-[24rem]")}>
      <svg
        viewBox="0 0 1000 380"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        {paths.map((d) => (
          <path
            key={d}
            data-eco-connection
            d={d}
            fill="none"
            stroke="hsl(var(--primary) / 0.32)"
            strokeWidth="1"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <div className="absolute inset-0">
        <div className="flex items-center justify-between gap-2 px-2">
          <div className="flex flex-col gap-3">
            {leftNodes.map((node) => (
              <MiniWindow key={node.id} label={node.label} screen={node.screen} />
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <Identity />
            <MiniWindow label="Factory" screen={null} />
          </div>

          <div className="flex flex-col gap-3">
            {rightNodes.map((node) => (
              <MiniWindow key={node.id} label={node.label} screen={node.screen} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
