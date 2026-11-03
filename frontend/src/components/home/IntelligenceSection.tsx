import { useLayoutEffect, useRef } from "react";
import { Activity, LineChart, Wallet } from "lucide-react";
import TextReveal from "./TextReveal";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { intelligencePillars } from "@/lib/command-content";

const icons = [Wallet, Activity, LineChart];

const IntelligenceSection = () => {
  const scope = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const element = scope.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-intel-card]", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: { trigger: element, start: "top 76%", once: true },
      });
    }, element);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section className="relative overflow-hidden bg-[#071A36] py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148, 190, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 190, 255, 0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-hero-drift pointer-events-none absolute -left-32 top-1/3 h-[520px] w-[520px] rounded-full bg-[#1D4ED8]/25 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#93C5FD]">
              Business intelligence
            </p>
            <TextReveal
              as="h2"
              text="From business data to better decisions."
              className="mt-4 text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-white"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="max-w-md text-[14.5px] leading-relaxed text-white/55">
              The same transaction record that runs the work also answers the questions management
              asks — without a separate reporting cycle.
            </p>
          </div>
        </div>

        <div ref={scope} className="mt-12 grid gap-4 md:grid-cols-3">
          {intelligencePillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <div
                key={pillar.number}
                data-intel-card
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-[#93C5FD]">
                    <Icon size={18} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.015em] text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-white/50">
                  {pillar.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-white/[0.08] pt-4">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-white/45"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#60A5FA]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;
