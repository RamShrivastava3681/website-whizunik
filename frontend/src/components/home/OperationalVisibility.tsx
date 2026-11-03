import { useLayoutEffect, useRef } from "react";
import { AlertTriangle, ArrowDownRight, ArrowUpRight, Boxes, CircleDollarSign } from "lucide-react";
import TextReveal from "./TextReveal";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Kpi = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delta: string;
  direction: "up" | "down";
  spark: number[];
};

const kpis: Kpi[] = [
  { label: "Total Sales", value: 4.82, prefix: "$", suffix: "M", decimals: 2, delta: "+8.4%", direction: "up", spark: [18, 26, 22, 34, 30, 42, 39, 48] },
  { label: "Gross Profit", value: 1.26, prefix: "$", suffix: "M", decimals: 2, delta: "+4.1%", direction: "up", spark: [12, 15, 13, 19, 17, 22, 21, 26] },
  { label: "Net Profit", value: 412, prefix: "$", suffix: "K", delta: "+2.6%", direction: "up", spark: [8, 11, 9, 14, 12, 16, 15, 19] },
  { label: "Receivables", value: 986, prefix: "$", suffix: "K", delta: "−3.2%", direction: "down", spark: [30, 28, 29, 24, 26, 21, 22, 18] },
  { label: "Payables", value: 742, prefix: "$", suffix: "K", delta: "+1.8%", direction: "up", spark: [14, 16, 15, 18, 17, 20, 19, 22] },
  { label: "Cash Available", value: 1.35, prefix: "$", suffix: "M", decimals: 2, delta: "+6.0%", direction: "up", spark: [10, 14, 12, 18, 16, 21, 19, 25] },
];

const revenuePoints = [32, 44, 38, 56, 50, 68, 62, 78, 72, 88, 84, 96];
const cashBars = [58, 74, 46, 86, 66, 92];

const sparklinePath = (values: number[]) => {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 100;
      const y = 26 - ((value - min) / range) * 22;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
};

const areaPath = (values: number[]) => {
  const max = Math.max(...values);
  const line = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 320;
      const y = 90 - (value / max) * 74;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  return `${line} L 320 96 L 0 96 Z`;
};

const CountUp = ({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const format = (current: number) =>
      `${prefix}${current.toFixed(decimals)}${suffix}`;

    if (prefersReduced) {
      element.textContent = format(value);
      return;
    }

    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: { trigger: element, start: "top 90%", once: true },
      onUpdate: () => {
        element.textContent = format(counter.value);
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, prefix, suffix, decimals, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const OperationalVisibility = () => {
  const scope = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const element = scope.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const trigger = { trigger: element, start: "top 72%", once: true };

      gsap.from("[data-dash-card]", {
        y: 26,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        scrollTrigger: trigger,
      });

      gsap.from("[data-dash-panel]", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        delay: 0.15,
        scrollTrigger: trigger,
      });

      gsap.utils.toArray<SVGPathElement>("[data-chart-line]").forEach((path) => {
        const length = path.getTotalLength();
        gsap.fromTo(
          path,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 1.6,
            ease: "power2.inOut",
            scrollTrigger: trigger,
          },
        );
      });

      gsap.from("[data-chart-bar]", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.7,
        stagger: 0.07,
        delay: 0.3,
        scrollTrigger: trigger,
      });
    }, element);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[520px] rounded-full bg-primary/[0.06] blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Operational visibility</p>
          <TextReveal
            as="h2"
            text="Know your business. Not just your numbers."
            className="text-balance mt-4 text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-foreground"
          />
          <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
            One executive view of trading performance, working capital, stock health and the
            approvals that are actually blocking the business.
          </p>
        </div>

        <div ref={scope} className="mt-12 sm:mt-14">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-panel">
            {/* Workspace bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <CircleDollarSign size={15} />
                </span>
                <div>
                  <p className="text-[12.5px] font-semibold text-foreground">Executive overview</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                    Fiscal year · consolidated
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="status-pill status-pill-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Synced
                </span>
                <span className="hidden rounded-md border border-border px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-muted-foreground sm:inline">
                  Month to date
                </span>
              </div>
            </div>

            {/* KPI grid */}
            <div className="grid grid-cols-1 gap-px border-b border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {kpis.map((kpi) => (
                <div key={kpi.label} data-dash-card className="bg-card p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[11.5px] font-medium text-muted-foreground">{kpi.label}</p>
                    <span
                      className={`inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 font-mono text-[9.5px] font-medium ${
                        kpi.direction === "up"
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                      }`}
                    >
                      {kpi.direction === "up" ? (
                        <ArrowUpRight size={10} />
                      ) : (
                        <ArrowDownRight size={10} />
                      )}
                      {kpi.delta}
                    </span>
                  </div>
                  <p className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-foreground">
                    <CountUp
                      value={kpi.value}
                      prefix={kpi.prefix}
                      suffix={kpi.suffix}
                      decimals={kpi.decimals}
                    />
                  </p>
                  <svg viewBox="0 0 100 28" className="mt-3 h-7 w-full" aria-hidden="true">
                    <path
                      d={sparklinePath(kpi.spark)}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      className={kpi.direction === "up" ? "text-primary/60" : "text-warning/70"}
                    />
                  </svg>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid gap-px bg-border lg:grid-cols-12">
              <div data-dash-panel className="bg-card p-5 lg:col-span-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[12.5px] font-semibold text-foreground">Revenue trend</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                      Trailing 12 periods
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">Indexed</span>
                </div>
                <svg viewBox="0 0 320 100" className="mt-4 h-40 w-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="revenue-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[24, 48, 72].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      x2="320"
                      y1={y}
                      y2={y}
                      className="stroke-border"
                      strokeWidth="1"
                      strokeDasharray="3 5"
                    />
                  ))}
                  <path d={areaPath(revenuePoints)} fill="url(#revenue-fill)" />
                  <path
                    data-chart-line
                    d={areaPath(revenuePoints).replace(/ L 320 96 L 0 96 Z$/, "")}
                    fill="none"
                    className="stroke-primary"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div data-dash-panel className="bg-card p-5 lg:col-span-5">
                <p className="text-[12.5px] font-semibold text-foreground">Cash flow</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                  Weekly net position
                </p>
                <div className="mt-5 flex h-36 items-end gap-2.5">
                  {cashBars.map((value, index) => (
                    <div key={index} className="flex flex-1 flex-col items-center gap-2">
                      <div className="flex h-28 w-full items-end">
                        <div
                          data-chart-bar
                          className={`w-full rounded-t-[3px] ${
                            index === cashBars.length - 1 ? "bg-primary" : "bg-primary/25"
                          }`}
                          style={{ height: `${value}%` }}
                        />
                      </div>
                      <span className="font-mono text-[8.5px] text-muted-foreground">
                        W{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-px border-t border-border bg-border lg:grid-cols-12">
              <div data-dash-panel className="bg-card p-5 lg:col-span-6">
                <div className="flex items-center gap-2">
                  <Boxes size={14} className="text-primary" />
                  <p className="text-[12.5px] font-semibold text-foreground">Inventory performance</p>
                </div>
                <div className="mt-4 space-y-3.5">
                  {[
                    { label: "Finished goods", value: 68, tone: "bg-success" },
                    { label: "Raw material", value: 52, tone: "bg-primary" },
                    { label: "QC pending", value: 24, tone: "bg-warning" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-[11.5px]">
                        <span className="text-muted-foreground">{row.label}</span>
                        <span className="font-mono text-foreground/80">{row.value}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-container-high">
                        <div
                          className={`h-full rounded-full ${row.tone}`}
                          style={{ width: `${row.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div data-dash-panel className="bg-card p-5 lg:col-span-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-warning" />
                  <p className="text-[12.5px] font-semibold text-foreground">Operational alerts</p>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {[
                    { text: "4 purchase orders awaiting approval", tone: "status-pill-warning", tag: "Approval" },
                    { text: "12 items below reorder point", tone: "status-pill-danger", tag: "Stock" },
                    { text: "3 dispatches pending documents", tone: "status-pill-info", tag: "Dispatch" },
                  ].map((alert) => (
                    <li
                      key={alert.text}
                      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface-container px-3 py-2"
                    >
                      <span className="text-[12px] text-foreground/80">{alert.text}</span>
                      <span className={`status-pill ${alert.tone} shrink-0`}>{alert.tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-3 text-center font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted-foreground">
            Illustrative workspace — sample figures for interface demonstration only
          </p>
        </div>
      </div>
    </section>
  );
};

export default OperationalVisibility;
