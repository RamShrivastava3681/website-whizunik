import { useLayoutEffect, useRef, useState } from "react";
import { CreditCard, FileSpreadsheet, Layers, ShoppingBag, ShoppingCart, Store } from "lucide-react";
import TextReveal from "./TextReveal";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { integrations } from "@/lib/command-content";

const CENTER = { x: 500, y: 300 };

const platformLayout: Record<string, { x: number; y: number; icon: typeof Store }> = {
  amazon: { x: 130, y: 80, icon: ShoppingBag },
  flipkart: { x: 500, y: 48, icon: ShoppingCart },
  myntra: { x: 870, y: 80, icon: Store },
  shopify: { x: 230, y: 500, icon: FileSpreadsheet },
  tally: { x: 770, y: 500, icon: CreditCard },
};

const connector = (x: number, y: number) => {
  const midX = (x + CENTER.x) / 2;
  const midY = (y + CENTER.y) / 2;
  const bend = y > CENTER.y ? 26 : -26;
  return `M ${x} ${y} Q ${midX + bend} ${midY + bend} ${CENTER.x} ${CENTER.y}`;
};

const IntegrationEcosystem = () => {
  const scope = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = integrations.find((integration) => integration.id === activeId) ?? null;

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const element = scope.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const hub = gsap.utils.toArray<HTMLElement>("[data-int-hub]");
      const nodes = gsap.utils.toArray<HTMLElement>("[data-int-node]");
      const paths = gsap.utils.toArray<SVGPathElement>("[data-int-path]");

      // Content is visible by default; the reveal only ever adds motion on enter.
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            hub,
            { autoAlpha: 0, scale: 0.92 },
            { autoAlpha: 1, scale: 1, duration: 0.75, ease: "back.out(1.4)", clearProps: "transform" },
          );

          gsap.fromTo(
            nodes,
            { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.07, delay: 0.12, clearProps: "transform" },
          );

          paths.forEach((path, index) => {
            const length = path.getTotalLength();
            gsap.fromTo(
              path,
              { strokeDasharray: length, strokeDashoffset: length },
              { strokeDashoffset: 0, duration: 1.1, delay: 0.15 + index * 0.06, ease: "power2.inOut" },
            );
          });
        },
      });
    }, element);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-container py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Integration surface</p>
          <TextReveal
            as="h2"
            text="Your business doesn't operate in isolation. Neither should your software."
            className="text-balance mt-4 text-[clamp(1.9rem,4vw,3.1rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground"
          />
          <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
            Command is an operating layer, not an ERP replacement. It is designed to exchange
            information with the accounting, commerce and logistics systems already running the
            business.
          </p>
        </div>

        <div ref={scope} className="mt-12">
          <div className="relative mx-auto hidden aspect-[1000/600] w-full max-w-4xl lg:block">
            <svg viewBox="0 0 1000 600" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <circle
                cx={CENTER.x}
                cy={CENTER.y}
                r="230"
                className="fill-none stroke-border"
                strokeDasharray="2 10"
              />
              {integrations.map((integration) => {
                const layout = platformLayout[integration.id];
                const isActive = activeId === integration.id;
                return (
                  <path
                    key={integration.id}
                    data-int-path
                    d={connector(layout.x, layout.y)}
                    fill="none"
                    strokeWidth={isActive ? 2.2 : 1.4}
                    className={`transition-[stroke,stroke-width] duration-300 ${
                      isActive ? "stroke-primary" : "stroke-foreground/15"
                    }`}
                  />
                );
              })}
            </svg>

            <div
              data-int-hub
              className="absolute left-1/2 top-1/2 w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-primary/25 bg-card p-5 text-center shadow-panel"
            >
              <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Layers size={20} />
              </span>
              <p className="text-[13.5px] font-semibold text-foreground">WhizUnik Command</p>
              <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                Operating layer
              </p>
            </div>

            {integrations.map((integration) => {
              const layout = platformLayout[integration.id];
              const Icon = layout.icon;
              const isActive = activeId === integration.id;
              return (
                <button
                  key={integration.id}
                  data-int-node
                  type="button"
                  onMouseEnter={() => setActiveId(integration.id)}
                  onFocus={() => setActiveId(integration.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onBlur={() => setActiveId(null)}
                  aria-pressed={isActive}
                  className={`absolute flex w-[176px] -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left transition-all duration-300 ${
                    isActive
                      ? "-translate-y-[calc(50%+3px)] border-primary/45 bg-primary/[0.07] shadow-pop"
                      : "border-border bg-card shadow-card hover:border-primary/35"
                  }`}
                  style={{
                    left: `${(layout.x / 1000) * 100}%`,
                    top: `${(layout.y / 600) * 100}%`,
                  }}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-surface-container text-primary">
                    <Icon size={14} />
                  </span>
                  <span className="text-[12.5px] font-semibold text-foreground">
                    {integration.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile list */}
          <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
            {integrations.map((integration) => {
              const Icon = platformLayout[integration.id].icon;
              return (
                <div key={integration.id} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon size={15} />
                    </span>
                    <p className="text-[13px] font-semibold text-foreground">{integration.name}</p>
                  </div>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
                    {integration.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-2 text-center lg:mt-6">
            <p className="text-[13px] leading-relaxed text-foreground/75">
              {active
                ? active.description
                : "Hover a connector to see what information is exchanged."}
            </p>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted-foreground">
              Connector availability is confirmed during implementation scoping
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationEcosystem;
