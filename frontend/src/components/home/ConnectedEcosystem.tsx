import { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Layers } from "lucide-react";
import TextReveal from "./TextReveal";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { departmentNodes } from "@/lib/command-content";

const CENTER = { x: 500, y: 310 };

const nodePositions: Record<string, { x: number; y: number }> = {
  sales: { x: 240, y: 86 },
  procurement: { x: 760, y: 86 },
  manufacturing: { x: 96, y: 310 },
  inventory: { x: 904, y: 310 },
  warehouse: { x: 240, y: 534 },
  finance: { x: 760, y: 534 },
};

const curvePath = (x: number, y: number) => {
  const midX = (x + CENTER.x) / 2;
  const midY = (y + CENTER.y) / 2;
  const bend = y > CENTER.y ? 34 : -34;
  return `M ${x} ${y} Q ${midX + bend} ${midY + bend} ${CENTER.x} ${CENTER.y}`;
};

const ConnectedEcosystem = () => {
  const scope = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeNode = departmentNodes.find((node) => node.id === activeId) ?? null;

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const element = scope.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const hub = gsap.utils.toArray<HTMLElement>("[data-eco-hub]");
      const nodes = gsap.utils.toArray<HTMLElement>("[data-eco-node]");
      const paths = gsap.utils.toArray<SVGPathElement>("[data-eco-path]");

      // Content is visible by default; the reveal only ever adds motion on enter.
      ScrollTrigger.create({
        trigger: element,
        start: "top 78%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            hub,
            { autoAlpha: 0, scale: 0.9 },
            { autoAlpha: 1, scale: 1, duration: 0.8, ease: "back.out(1.4)", clearProps: "transform" },
          );

          gsap.fromTo(
            nodes,
            { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08, delay: 0.15, clearProps: "transform" },
          );

          paths.forEach((path, index) => {
            const length = path.getTotalLength();
            gsap.fromTo(
              path,
              { strokeDasharray: length, strokeDashoffset: length },
              {
                strokeDashoffset: 0,
                duration: 1.2,
                delay: 0.15 + index * 0.07,
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
    <section
      id="platform"
      className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Introducing WhizUnik Command</p>
          <TextReveal
            as="h2"
            text="Your entire business. Finally connected."
            className="text-balance mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground"
          />
          <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
            Stop managing disconnected workflows. Bring your business operations together through
            one unified platform.
          </p>
        </div>

        <div ref={scope} className="mt-14 sm:mt-16">
          {/* Desktop: living diagram */}
          <div className="relative mx-auto hidden aspect-[1000/620] w-full max-w-5xl lg:block">
            <svg
              viewBox="0 0 1000 620"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <circle
                cx={CENTER.x}
                cy={CENTER.y}
                r="210"
                className="fill-none stroke-border/70"
                strokeDasharray="2 10"
              />
              <circle
                cx={CENTER.x}
                cy={CENTER.y}
                r="300"
                className="fill-none stroke-border/40"
                strokeDasharray="2 14"
              />
              {departmentNodes.map((node) => {
                const position = nodePositions[node.id];
                const isActive = activeId === node.id;
                return (
                  <path
                    key={node.id}
                    data-eco-path
                    d={curvePath(position.x, position.y)}
                    fill="none"
                    strokeWidth={isActive ? 2.2 : 1.4}
                    className={`transition-[stroke,stroke-width] duration-300 ${
                      isActive ? "stroke-primary" : "stroke-border"
                    }`}
                  />
                );
              })}
            </svg>

            {/* Central hub */}
            <div
              data-eco-hub
              className="absolute left-1/2 top-1/2 w-[228px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-primary/25 bg-card p-5 text-center shadow-panel"
            >
              <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Layers size={20} />
              </span>
              <p className="text-[13.5px] font-semibold text-foreground">WhizUnik Command</p>
              <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                Single source of truth
              </p>
            </div>

            {departmentNodes.map((node) => {
              const position = nodePositions[node.id];
              const isActive = activeId === node.id;
              return (
                <button
                  key={node.id}
                  data-eco-node
                  type="button"
                  onMouseEnter={() => setActiveId(node.id)}
                  onFocus={() => setActiveId(node.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onBlur={() => setActiveId(null)}
                  aria-pressed={isActive}
                  className={`absolute w-[172px] -translate-x-1/2 -translate-y-1/2 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                    isActive
                      ? "-translate-y-[calc(50%+4px)] border-primary/45 bg-primary/[0.07] shadow-pop"
                      : "border-border bg-card shadow-card hover:border-primary/35"
                  }`}
                  style={{
                    left: `${(position.x / 1000) * 100}%`,
                    top: `${(position.y / 620) * 100}%`,
                  }}
                >
                  <span className="block text-[12.5px] font-semibold text-foreground">
                    {node.label}
                  </span>
                  <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                    Department
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile: stacked cards */}
          <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
            <div className="rounded-xl border border-primary/25 bg-card p-4 shadow-card sm:col-span-2">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Layers size={17} />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-foreground">WhizUnik Command</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                    Single source of truth
                  </p>
                </div>
              </div>
            </div>
            {departmentNodes.map((node) => (
              <div key={node.id} className="rounded-xl border border-border bg-card p-4">
                <p className="text-[12.5px] font-semibold text-foreground">{node.label}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                  {node.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contextual description */}
          <div className="mx-auto mt-8 hidden max-w-3xl items-center justify-between gap-6 rounded-xl border border-border bg-card px-5 py-4 lg:flex">
            <div className="min-h-[42px]">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                {activeNode ? "Department flow" : "One operating layer"}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-foreground/85">
                {activeNode
                  ? activeNode.description
                  : "Hover a department to see how work moves into the shared operating layer."}
              </p>
            </div>
            <a
              href="#products"
              className="group inline-flex shrink-0 items-center gap-1.5 text-[12.5px] font-semibold text-primary transition-colors hover:text-primary/80"
            >
              See it in the product
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedEcosystem;
