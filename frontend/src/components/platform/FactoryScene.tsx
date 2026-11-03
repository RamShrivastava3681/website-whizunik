import { cn } from "@/lib/utils";

/**
 * Lightweight isometric factory built as SVG.
 * Deliberately avoids WebGL so the page stays smooth on ordinary laptops.
 */

const stations = [
  { id: "intake", x: 168, y: 318, label: "Material stores", accent: "teal" },
  { id: "cutting", x: 300, y: 292, label: "Cutting", accent: "blue" },
  { id: "assembly", x: 432, y: 266, label: "Assembly", accent: "blue" },
  { id: "qc", x: 564, y: 292, label: "Quality", accent: "teal" },
  { id: "finished", x: 676, y: 332, label: "Finished goods", accent: "navy" },
] as const;

const accentStyles = {
  teal: { top: "hsl(var(--brand-teal) / 0.28)", side: "hsl(var(--brand-teal) / 0.14)" },
  blue: { top: "hsl(var(--primary) / 0.26)", side: "hsl(var(--primary) / 0.13)" },
  navy: { top: "hsl(var(--brand-navy) / 0.22)", side: "hsl(var(--brand-navy) / 0.12)" },
};

const Machine = ({
  x,
  y,
  label,
  accent,
  height = 26,
}: {
  x: number;
  y: number;
  label: string;
  accent: keyof typeof accentStyles;
  height?: number;
}) => {
  const colours = accentStyles[accent];
  const w = 34;
  return (
    <g data-factory-station className="factory-station">
      <ellipse cx={x} cy={y + height + 6} rx={w + 6} ry={12} style={{ fill: "hsl(var(--brand-navy) / 0.06)" }} />
      <polygon
        points={`${x - w},${y} ${x},${y + 15} ${x},${y + 15 + height} ${x - w},${y + height}`}
        style={{ fill: colours.side }}
      />
      <polygon
        points={`${x + w},${y} ${x},${y + 15} ${x},${y + 15 + height} ${x + w},${y + height}`}
        style={{ fill: colours.top }}
      />
      <polygon
        points={`${x},${y - 15} ${x + w},${y} ${x},${y + 15} ${x - w},${y}`}
        style={{ fill: "hsl(var(--card))", stroke: "hsl(var(--border))", strokeWidth: 1 }}
      />
      <polygon
        points={`${x - 16},${y + 2} ${x},${y + 10} ${x},${y + 19} ${x - 16},${y + 11}`}
        style={{ fill: "hsl(var(--primary) / 0.5)" }}
      />
      <polygon
        points={`${x + 16},${y + 2} ${x},${y + 10} ${x},${y + 19} ${x + 16},${y + 11}`}
        style={{ fill: "hsl(var(--primary) / 0.28)" }}
      />
      <text
        x={x}
        y={y + height + 14}
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase" }}
      >
        {label}
      </text>
    </g>
  );
};

const Crate = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <polygon points="0,-8 12,0 0,8 -12,0" style={{ fill: "hsl(var(--card))", stroke: "hsl(var(--border))" }} />
    <polygon points="-12,0 0,8 0,18 -12,10" style={{ fill: "hsl(var(--brand-teal) / 0.16)" }} />
    <polygon points="12,0 0,8 0,18 12,10" style={{ fill: "hsl(var(--brand-teal) / 0.28)" }} />
  </g>
);

export const FactoryScene = () => (
  <div className="relative">
    <svg
      viewBox="0 0 800 480"
      role="img"
      aria-label="Illustrative isometric view of a factory floor with material stores, cutting, assembly, quality and finished goods stations"
      className="h-auto w-full overflow-visible"
    >
      {/* Floor */}
      <polygon
        points="400,58 746,258 400,458 54,258"
        style={{ fill: "hsl(var(--card))", stroke: "hsl(var(--border))", strokeWidth: 1 }}
      />
      <polygon
        points="400,88 706,258 400,428 94,258"
        style={{ fill: "hsl(var(--primary) / 0.035)" }}
      />

      {/* Floor grid, drawn in isometric space */}
      <g
        transform="matrix(0.866,0.5,-0.866,0.5,400,258)"
        style={{ stroke: "hsl(var(--border) / 0.75)", strokeWidth: 1 }}
      >
        {Array.from({ length: 9 }).map((_, index) => {
          const offset = -200 + index * 50;
          return (
            <g key={offset}>
              <line x1={offset} y1={-200} x2={offset} y2={200} />
              <line x1={-200} y1={offset} x2={200} y2={offset} />
            </g>
          );
        })}
      </g>

      {/* Conveyor / material path */}
      <path
        data-factory-path
        d="M168 340 L300 314 L432 288 L564 314 L676 352"
        fill="none"
        style={{ stroke: "hsl(var(--primary) / 0.35)", strokeWidth: 2, strokeDasharray: "7 7" }}
        strokeLinecap="round"
      />
      <path
        d="M168 346 L300 320 L432 294 L564 320 L676 358"
        fill="none"
        style={{ stroke: "hsl(var(--border))", strokeWidth: 1 }}
        strokeLinecap="round"
      />

      {/* Material stores stack */}
  <g data-factory-material>
    <Crate x={124} y={306} />
    <Crate x={150} y={294} scale={0.85} />
    <Crate x={136} y={280} scale={0.7} />
  </g>

      {/* Machines */}
      {stations.map((station) => (
        <Machine key={station.id} {...station} height={station.id === "assembly" ? 30 : 24} />
      ))}

      {/* Quality gate */}
      <g data-factory-qc>
        <path
          d="M542 268 Q564 236 586 268"
          fill="none"
          style={{ stroke: "hsl(var(--brand-teal) / 0.55)", strokeWidth: 2 }}
        />
        <circle cx={564} cy={246} r={4} style={{ fill: "hsl(var(--brand-teal))" }} className="factory-pulse" />
      </g>

      {/* Finished pallet */}
      <g data-factory-done>
        <Crate x={700} y={352} scale={0.9} />
        <Crate x={716} y={342} scale={0.75} />
      </g>

      {/* Moving material containers */}
      {[0, 1, 2].map((index) => (
        <g
          key={index}
          data-factory-container
          data-offset={index}
          transform={`translate(${168 + index * 18} ${340 - index * 10})`}
        >
          <rect
            x={-5}
            y={-5}
            width={10}
            height={10}
            rx={2}
            style={{ fill: "hsl(var(--primary))", opacity: 0.75 }}
          />
        </g>
      ))}

      {/* Station status dots */}
      {stations.map((station) => (
        <circle
          key={`dot-${station.id}`}
          cx={station.x + 22}
          cy={station.y - 12}
          r={2.6}
          style={{ fill: "hsl(var(--brand-teal))" }}
          className="factory-pulse"
        />
      ))}
    </svg>    </div>
);

/* ------------------------------------------------------------------ */
/* Dimensional panels that float above the factory                     */
/* ------------------------------------------------------------------ */

type PanelRow = { label: string; value: string };

export const FactoryPanel = ({
  title,
  rows,
  className,
  animate = true,
}: {
  title: string;
  rows: PanelRow[];
  className?: string;
  animate?: boolean;
}) => (
  <div
    data-factory-panel
    className={cn(
      "w-[10.5rem] rounded-md border border-border/90 bg-card/95 p-3 shadow-[0_16px_40px_-26px_rgba(14,35,64,0.45)] backdrop-blur-[2px]",
      animate && "platform-float",
      className,
    )}
  >
    <p className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-brand-teal">{title}</p>
    <dl className="mt-2 space-y-1.5">
      {rows.map((row) => (
        <div key={row.label} className="flex items-baseline justify-between gap-2">
          <dt className="text-[9.5px] leading-tight text-muted-foreground">{row.label}</dt>
          <dd className="text-right text-[9.5px] font-semibold leading-tight text-foreground">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

export const FactoryPanels = ({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) => (
  <div
    className={cn(
      "pointer-events-none absolute inset-0",
      variant === "mobile" && "relative inset-auto mt-5 grid grid-cols-2 gap-3",
    )}
  >
    <FactoryPanel
      title="Production overview"
      rows={[
        { label: "Work orders", value: "In progress" },
        { label: "Planned", value: "Scheduled" },
        { label: "Completed", value: "Updating" },
      ]}
      className={cn(variant === "mobile" && "w-auto", variant === "desktop" && "absolute -left-6 top-2 lg:top-6")}
    />
    <FactoryPanel
      title="Work orders"
      rows={[
        { label: "Stage", value: "Assembly" },
        { label: "Workstation", value: "Line 2" },
        { label: "Status", value: "Running" },
      ]}
      className={cn(variant === "mobile" && "w-auto", variant === "desktop" && "absolute -right-4 top-0 lg:top-4")}
    />
    <FactoryPanel
      title="Quality control"
      rows={[
        { label: "Inspection", value: "Pending" },
        { label: "Accepted", value: "Recorded" },
        { label: "Rejected", value: "Recorded" },
      ]}
      className={cn(variant === "mobile" && "w-auto", variant === "desktop" && "absolute -left-2 bottom-2 lg:bottom-0")}
    />
    <FactoryPanel
      title="Material consumption"
      rows={[
        { label: "Planned", value: "Against BOM" },
        { label: "Actual", value: "Recorded" },
        { label: "Variance", value: "Tracked" },
      ]}
      className={cn(variant === "mobile" && "w-auto", variant === "desktop" && "absolute -right-2 bottom-0 lg:-bottom-4")}
    />
  </div>
);
