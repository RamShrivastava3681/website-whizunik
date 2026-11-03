import { useLayoutEffect, useRef, useState } from "react";
import { ArrowRightLeft, Layers } from "lucide-react";
import TextReveal from "@/components/home/TextReveal";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { workflowNodes } from "@/lib/how-content";

const CENTER_X = 500;
const BAND_TOP = 285;
const BAND_BOTTOM = 355;

const connector = (node: { x: number; y: number; side: "top" | "bottom" }) => {
  if (node.side === "top") {
    return `M ${node.x} ${node.y + 40} C ${node.x} ${node.y + 110}, ${node.x} ${BAND_TOP - 60}, ${node.x} ${BAND_TOP}`;
  }
  return `M ${node.x} ${node.y - 40} C ${node.x} ${node.y - 110}, ${node.x} ${BAND_BOTTOM + 60}, ${node.x} ${BAND_BOTTOM}`;
};

const WorkflowMap = () => {
  const scope = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeNode = workflowNodes.find((node) => node.id === activeId) ?? null;

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const element = scope.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 76%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            "[data-map-node]",
            { autoAlpha: 0, y: 14 },
            { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06, clearProps: "transform" },
          );

          gsap.fromTo(
            "[data-map-band]",
            { autoAlpha: 0, scaleX: 0.96 },
            { autoAlpha: 1, scaleX: 1, duration: 0.7, ease: "power2.out", clearProps: "transform" },
          );

          gsap.utils.toArray<SVGPathElement>("[data-map-path]").forEach((path, index) => {
            const length = path.getTotalLength();
            gsap.fromTo(
              path,
              { strokeDasharray: length, strokeDashoffset: length },
              {
                strokeDashoffset: 0,
                duration: 1.1,
                delay: 0.25 + index * 0.05,
                ease: "power2.inOut",
              },
            );
          });
        },
      });
    }, element);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">The operating model</p>
            <TextReveal
              as="h2"
              text="One shared record. Departments working in parallel."
              className="text-balance mt-4 text-[clamp(1.9rem,3.9vw,3rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-foreground"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              Information enters once. Every function works from the same transaction and hands on
              responsibility rather than re-keying data.
            </p>
          </div>
        </div>

        <div ref={scope} className="mt-10">
          {/* Desktop diagram */}
          <div className="relative mx-auto hidden aspect-[1000/640] w-full max-w-5xl lg:block">
            <svg viewBox="0 0 1000 640" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <marker
                  id="map-arrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" className="fill-primary/70" />
                </marker>
              </defs>

              {workflowNodes.map((node) => {
                const isActive = activeId === node.id;
                return (
                  <path
                    key={node.id}
                    data-map-path
                    d={connector(node)}
                    fill="none"
                    markerEnd="url(#map-arrow)"
                    strokeWidth={isActive ? 2.2 : 1.4}
                    className={`transition-[stroke,stroke-width] duration-300 ${
                      isActive ? "stroke-primary" : "stroke-primary/30"
                    }`}
                  />
                );
              })}
            </svg>

            {/* Shared record band */}
            <div
              data-map-band
              className="absolute left-1/2 w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-primary/25 bg-card px-5 py-3.5 shadow-panel"
              style={{ top: `${((BAND_TOP + BAND_BOTTOM) / 2 / 640) * 100}%` }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Layers size={17} />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground">
                      WhizUnik Command — shared transaction record
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                      Documents, status, ownership and audit history
                    </p>
                  </div>
                </div>
                <span className="hidden items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-primary sm:inline-flex">
                  <ArrowRightLeft size={12} />
                  Two-way
                </span>
              </div>
            </div>

            {workflowNodes.map((node) => {
              const isActive = activeId === node.id;
              return (
                <button
                  key={node.id}
                  data-map-node
                  type="button"
                  onMouseEnter={() => setActiveId(node.id)}
                  onFocus={() => setActiveId(node.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onBlur={() => setActiveId(null)}
                  aria-pressed={isActive}
                  className={`absolute w-[168px] -translate-x-1/2 -translate-y-1/2 rounded-lg border px-3 py-2.5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-primary/45 bg-primary/[0.06] shadow-pop"
                      : "border-border bg-card shadow-card hover:border-primary/35"
                  }`}
                  style={{
                    left: `${(node.x / 1000) * 100}%`,
                    top: `${(node.y / 640) * 100}%`,
                  }}
                >
                  <span className="block text-[11.5px] font-semibold leading-snug text-foreground">
                    {node.label}
                  </span>
                  <span className="mt-0.5 block font-mono text-[8px] uppercase tracking-[0.12em] text-muted-foreground">
                    {node.side === "top" ? "Demand & control" : "Execution & settlement"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile diagram */}
          <div className="space-y-3 lg:hidden">
            <div className="rounded-xl border border-primary/25 bg-card p-4 shadow-card">
              <p className="text-[12.5px] font-semibold text-foreground">
                WhizUnik Command — shared transaction record
              </p>
              <p className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-muted-foreground">
                Documents, status, ownership and audit history
              </p>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {workflowNodes.map((node) => (
                <div
                  key={node.id}
                  className="rounded-lg border border-border bg-card px-3.5 py-3"
                >
                  <p className="text-[11.5px] font-semibold text-foreground">{node.label}</p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-muted-foreground">
                    {node.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-[12.5px] leading-relaxed text-muted-foreground">
              {activeNode
                ? activeNode.blurb
                : "Departments operate simultaneously. Connectors show where information and approvals move — not a fixed sequence."}
            </p>
            <p className="shrink-0 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
              Non-linear by design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowMap;
