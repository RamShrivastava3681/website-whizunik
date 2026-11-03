import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Layers } from "lucide-react";
import TextReveal from "@/components/home/TextReveal";
import Magnetic from "@/components/Magnetic";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const nodes = [
  { label: "Sales", x: 62, y: 42 },
  { label: "Procurement", x: 200, y: 22 },
  { label: "Factory", x: 338, y: 42 },
  { label: "Warehouse", x: 62, y: 318 },
  { label: "Inventory", x: 200, y: 338 },
  { label: "Finance", x: 338, y: 318 },
];

const connector = (x: number, y: number) =>
  y < 180
    ? `M ${x} ${y + 16} Q ${x} ${y + 60} 200 148`
    : `M ${x} ${y - 16} Q ${x} ${y - 60} 200 212`;

const HowHero = () => {
  const scope = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const element = scope.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray<SVGPathElement>("[data-hero-path]");

      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        once: true,
        onEnter: () => {
          paths.forEach((path, index) => {
            const length = path.getTotalLength();
            gsap.fromTo(
              path,
              { strokeDasharray: length, strokeDashoffset: length },
              {
                strokeDashoffset: 0,
                duration: 1.4,
                delay: 0.2 + index * 0.1,
                ease: "power2.inOut",
              },
            );
          });

          gsap.fromTo(
            "[data-hero-node]",
            { autoAlpha: 0, scale: 0.94 },
            { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.07, delay: 0.35, clearProps: "transform" },
          );

          gsap.fromTo(
            "[data-hero-hub]",
            { autoAlpha: 0, scale: 0.92 },
            { autoAlpha: 1, scale: 1, duration: 0.8, ease: "back.out(1.4)", clearProps: "transform" },
          );
        },
      });
    }, element);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={scope}
      className="relative overflow-hidden border-b border-border bg-background pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border) / 0.55) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.55) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
          maskImage: "radial-gradient(ellipse at 70% 0%, black 0%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse at 70% 0%, black 0%, transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[520px] rounded-full bg-primary/[0.07] blur-[130px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-6 md:px-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-12">
        <div className="lg:col-span-6">
          <p className="eyebrow">How it works</p>
          <TextReveal
            as="h1"
            immediate
            text="From fragmented workflows to connected operations."
            className="text-balance mt-4 text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground"
          />
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            WhizUnik Command brings every critical business function into one coordinated operating
            environment.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic>
              <Link
                to="/contact?type=walkthrough"
                className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-primary px-6 text-[13.5px] font-semibold text-white shadow-[0_16px_40px_-16px_rgba(37,99,235,0.7)] transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Request a Walkthrough
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Magnetic>
            <Link
              to="/#platform"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 text-[13.5px] font-semibold text-foreground transition-colors hover:border-primary/40 sm:w-auto"
            >
              Explore WhizUnik Command
            </Link>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
            {[
              { value: "7", label: "Connected functions" },
              { value: "1", label: "Transaction record" },
              { value: "0", label: "Handoff re-entry" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-1 text-[22px] font-semibold tracking-[-0.02em] text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto hidden aspect-[400/360] w-full max-w-[520px] lg:block">
            <svg viewBox="0 0 400 360" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {nodes.map((node) => (
                <path
                  key={node.label}
                  data-hero-path
                  d={connector(node.x, node.y)}
                  fill="none"
                  className="stroke-primary/35"
                  strokeWidth="1.4"
                />
              ))}
              <circle
                cx="200"
                cy="180"
                r="118"
                className="fill-none stroke-border"
                strokeDasharray="2 9"
              />
            </svg>

            {nodes.map((node) => (
              <div
                key={node.label}
                data-hero-node
                className="absolute w-[104px] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-card px-2.5 py-2 text-center shadow-card"
                style={{ left: `${(node.x / 400) * 100}%`, top: `${(node.y / 360) * 100}%` }}
              >
                <span className="text-[11.5px] font-semibold text-foreground">{node.label}</span>
              </div>
            ))}

            <div
              data-hero-hub
              className="absolute left-1/2 top-1/2 w-[186px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-primary/25 bg-card p-4 text-center shadow-panel"
            >
              <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Layers size={17} />
              </span>
              <p className="text-[12.5px] font-semibold text-foreground">WhizUnik Command</p>
              <p className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.14em] text-muted-foreground">
                Shared record
              </p>
            </div>
          </div>

          {/* Mobile visual */}
          <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
            <div className="flex items-center gap-2.5 rounded-xl border border-primary/25 bg-card p-3.5 shadow-card sm:col-span-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Layers size={16} />
              </span>
              <div>
                <p className="text-[12.5px] font-semibold text-foreground">WhizUnik Command</p>
                <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-muted-foreground">
                  Shared record
                </p>
              </div>
            </div>
            {nodes.map((node) => (
              <div
                key={node.label}
                className="rounded-lg border border-border bg-card px-3 py-2.5 text-center text-[12px] font-semibold text-foreground"
              >
                {node.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowHero;
