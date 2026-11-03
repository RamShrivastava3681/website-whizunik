type CapabilityIllustrationProps = {
  variant: "cycle" | "stack" | "documents";
};

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-container p-6">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(to right, hsl(var(--border) / 0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.5) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
    <div className="relative">{children}</div>
  </div>
);

const Cycle = () => (
  <div>
    <div className="flex items-center justify-between">
      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
        Cash conversion cycle
      </p>
      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#9A8B72]">
        Illustrative
      </span>
    </div>
    <svg viewBox="0 0 320 190" className="mt-4 h-auto w-full" aria-hidden="true">
      <path
        d="M 160 32 A 66 66 0 1 1 96 96"
        fill="none"
        className="stroke-primary/25"
        strokeWidth="1.4"
        strokeDasharray="4 5"
      />
      <path
        d="M 96 96 A 66 66 0 0 1 120 46"
        fill="none"
        className="stroke-primary"
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd="url(#cycle-arrow)"
      />
      <defs>
        <marker id="cycle-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-primary" />
        </marker>
      </defs>
      <circle cx="160" cy="98" r="42" className="fill-card stroke-border" />
      <text x="160" y="92" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="600">
        Working
      </text>
      <text x="160" y="108" textAnchor="middle" className="fill-muted-foreground" fontSize="9">
        capital gap
      </text>
      {[
        { x: 160, y: 24, label: "Supplier paid" },
        { x: 268, y: 112, label: "Inventory held" },
        { x: 160, y: 178, label: "Buyer invoiced" },
        { x: 52, y: 112, label: "Cash collected" },
      ].map((point) => (
        <g key={point.label}>
          <circle cx={point.x} cy={point.y} r="3" className="fill-primary" />
          <text
            x={point.x}
            y={point.y + (point.y > 150 ? -10 : point.y < 40 ? 16 : 14)}
            textAnchor="middle"
            className="fill-muted-foreground"
            fontSize="8.5"
          >
            {point.label}
          </text>
        </g>
      ))}
    </svg>
  </div>
);

const Stack = () => (
  <div>
    <div className="flex items-center justify-between">
      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
        Illustrative capital structure
      </p>
      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#9A8B72]">
        Not a recommendation
      </span>
    </div>
    <div className="mt-6 space-y-3">
      {[
        { label: "Senior secured facilities", width: "88%", tone: "bg-primary" },
        { label: "Working capital lines", width: "66%", tone: "bg-primary/55" },
        { label: "Junior / mezzanine", width: "42%", tone: "bg-[#9A8B72]/60" },
        { label: "Promoter contribution", width: "24%", tone: "bg-foreground/20" },
      ].map((layer) => (
        <div key={layer.label}>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-muted-foreground">{layer.label}</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-card">
            <div className={`h-full rounded-full ${layer.tone}`} style={{ width: layer.width }} />
          </div>
        </div>
      ))}
    </div>
    <p className="mt-5 border-t border-border pt-3 text-[11px] leading-relaxed text-muted-foreground">
      Structure follows the transaction, security position and cash generation — not a standard
      template.
    </p>
  </div>
);

const Documents = () => (
  <div>
    <div className="flex items-center justify-between">
      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
        Information readiness
      </p>
      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#9A8B72]">
        Illustrative
      </span>
    </div>
    <div className="mt-5 grid gap-2.5">
      {[
        "Operating and financial narrative",
        "Cash-flow model and sensitivities",
        "Receivables and payable ageing",
        "Covenant and security analysis",
        "Diligence documentation set",
      ].map((item, index) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5"
        >
          <span className="font-mono text-[9px] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[11.5px] text-foreground/80">{item}</span>
          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary/50" />
        </div>
      ))}
    </div>
  </div>
);

const CapabilityIllustration = ({ variant }: CapabilityIllustrationProps) => (
  <Frame>
    {variant === "cycle" ? <Cycle /> : variant === "stack" ? <Stack /> : <Documents />}
  </Frame>
);

export default CapabilityIllustration;
