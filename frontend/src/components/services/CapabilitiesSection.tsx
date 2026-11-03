import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/home/TextReveal";
import CapabilityIllustration from "./CapabilityIllustration";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { capabilities } from "@/lib/advisory-content";

const CapabilitiesSection = () => {
  const scope = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const element = scope.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-capability]").forEach((article) => {
        ScrollTrigger.create({
          trigger: article,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              article.querySelector("[data-capability-copy]"),
              { autoAlpha: 0, y: 22 },
              { autoAlpha: 1, y: 0, duration: 0.7, clearProps: "transform" },
            );
            gsap.fromTo(
              article.querySelector("[data-capability-visual]"),
              { autoAlpha: 0, y: 26 },
              { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.08, clearProps: "transform" },
            );
          },
        });
      });
    }, element);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section id="capabilities" className="relative bg-background">
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-16 sm:px-6 sm:pt-20 md:px-8 lg:px-12 lg:pt-24">
        <div className="grid gap-6 border-b border-border pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Advisory capabilities</p>
            <TextReveal
              as="h2"
              text="Three mandates, each starting from the transaction."
              className="text-balance mt-4 text-[clamp(1.9rem,3.9vw,3rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-foreground"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              Working capital, structured growth capital and capital readiness — engaged individually
              or together, depending on where the constraint actually sits.
            </p>
          </div>
        </div>
      </div>

      <div ref={scope}>
        {capabilities.map((capability, index) => {
          const visualFirst = index % 2 === 1;
          return (
            <article
              key={capability.id}
              data-capability
              className={`border-b border-border ${
                index % 2 === 1 ? "bg-surface-container" : "bg-background"
              }`}
            >
              <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-14 sm:px-6 sm:py-16 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-20">
                <div
                  data-capability-copy
                  className={`lg:col-span-6 ${visualFirst ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#9A8B72]">
                      {capability.number}
                    </span>
                    <span className="h-px w-8 bg-border" />
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                      {capability.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-headline text-[clamp(1.7rem,3vw,2.35rem)] font-medium leading-[1.1] tracking-[-0.02em] text-foreground">
                    {capability.title}
                  </h3>

                  <dl className="mt-7 space-y-5">
                    {[
                      { label: "Requirement addressed", value: capability.requirement },
                      { label: "How the process works", value: capability.process },
                      { label: "Commercial context", value: capability.context },
                    ].map((row) => (
                      <div key={row.label} className="border-l border-border pl-4">
                        <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                          {row.label}
                        </dt>
                        <dd className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/80">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    to="/contact?type=advisory"
                    className="group mt-7 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Discuss this requirement
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>

                <div
                  data-capability-visual
                  className={`lg:col-span-6 ${visualFirst ? "lg:order-1" : "lg:order-2"}`}
                >
                  <CapabilityIllustration variant={capability.illustration} />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
