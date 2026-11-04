import { useLayoutEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import BrowserFrame from "@/components/home/BrowserFrame";
import TextReveal from "@/components/home/TextReveal";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { departments } from "@/lib/how-content";

const DepartmentSections = () => {
  const scope = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const element = scope.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-dept]").forEach((article) => {
        ScrollTrigger.create({
          trigger: article,
          start: "top 78%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              article.querySelector("[data-dept-copy]"),
              { autoAlpha: 0, y: 24 },
              { autoAlpha: 1, y: 0, duration: 0.7, clearProps: "transform" },
            );

            gsap.fromTo(
              article.querySelectorAll("[data-dept-activity]"),
              { autoAlpha: 0, y: 10 },
              { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.07, delay: 0.1, clearProps: "transform" },
            );

            gsap.fromTo(
              article.querySelector("[data-dept-visual]"),
              { autoAlpha: 0, y: 36, scale: 0.97 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                ease: "power2.out",
                clearProps: "transform",
              },
            );
          },
        });
      });
    }, element);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section id="departments" className="relative bg-background">
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-16 sm:px-6 sm:pt-20 md:px-8 lg:px-12 lg:pt-24">
        <div className="grid gap-6 border-b border-border pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Department by department</p>
            <TextReveal
              as="h2"
              text="Each function gets the surface it actually works on."
              className="text-balance mt-4 text-[clamp(1.9rem,3.9vw,3rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-foreground"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              Not one screen for everyone. Each workspace is shaped around the decisions that team
              makes, while the transaction underneath stays shared.
            </p>
          </div>
        </div>
      </div>

      <div ref={scope}>
        {departments.map((department, index) => {
          const imageFirst = index % 2 === 1;
          return (
            <article
              key={department.id}
              data-dept
              className={`border-b border-border ${
                index % 2 === 1 ? "bg-surface-container" : "bg-background"
              }`}
            >
              <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-9 px-5 py-14 sm:px-6 sm:py-16 md:px-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-14 lg:px-12 lg:py-20">
                <div
                  data-dept-visual
                  className={`relative lg:col-span-7 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-7 left-0 select-none font-mono text-[46px] font-medium leading-none text-foreground/[0.07] sm:text-[56px]"
                  >
                    {department.number}
                  </span>
                  <BrowserFrame
                    tone="light"
                    src={department.image}
                    alt={department.imageAlt}
                    label={department.eyebrow}
                    className="relative"
                  />
                </div>

                <div
                  data-dept-copy
                  className={`lg:col-span-5 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-primary">
                      {department.number}
                    </span>
                    <span className="h-px w-8 bg-border" />
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                      {department.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-3 text-[clamp(1.45rem,2.6vw,2rem)] font-semibold leading-[1.14] tracking-[-0.025em] text-foreground">
                    {department.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                    {department.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {department.activities.map((activity) => (
                      <li
                        key={activity}
                        data-dept-activity
                        className="flex items-start gap-2.5 text-[13px] text-foreground/80"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary">
                          <Check size={10} strokeWidth={3} />
                        </span>
                        {activity}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border pt-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                      Connects with
                    </span>
                    {department.connects.map((connection) => (
                      <span
                        key={connection}
                        className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-2 py-0.5 text-[10.5px] font-medium text-foreground/75"
                      >
                        <ArrowRight size={9} className="text-primary/60" />
                        {connection}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default DepartmentSections;
