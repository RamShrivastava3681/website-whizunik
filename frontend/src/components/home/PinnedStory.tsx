import { useLayoutEffect, useRef, useState } from "react";
import TextReveal from "./TextReveal";
import BrowserFrame from "./BrowserFrame";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { storyStages } from "@/lib/command-content";

const PinnedStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const prefersReduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 1024px)", () => {
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      const state = { index: 0 };

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance() + window.innerHeight * 0.25}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
            const next = Math.min(
              storyStages.length - 1,
              Math.floor(self.progress * storyStages.length),
            );
            if (next !== state.index) {
              state.index = next;
              setActive(next);
            }
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => matchMedia.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      id="operations"
      className="relative overflow-hidden bg-[#071A36] text-white lg:h-screen"
    >
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
        className="animate-hero-drift-slow pointer-events-none absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-[#1D4ED8]/25 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pt-20 sm:px-6 md:px-8 lg:px-12 lg:pt-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#93C5FD]">
              One continuous record
            </p>
            <TextReveal
              as="h2"
              text="One business. Multiple operations. One source of truth."
              className="mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white"
            />
          </div>

          <div className="hidden w-[220px] shrink-0 lg:block">
            <div className="mb-2 flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/35">
              <span>Stage {storyStages[active].number}</span>
              <span>{String(active + 1).padStart(2, "0")} / 04</span>
            </div>
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <div
                ref={progressRef}
                className="h-full w-full origin-left scale-x-0 rounded-full bg-[#60A5FA]"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="relative mt-10 flex flex-col gap-14 pb-20 will-change-transform sm:gap-16 lg:mt-6 lg:h-[calc(100vh-260px)] lg:flex-row lg:flex-nowrap lg:items-center lg:gap-0 lg:pb-0"
      >
        {storyStages.map((stage, index) => (
          <div
            key={stage.number}
            className="w-full shrink-0 px-5 sm:px-6 md:px-8 lg:flex lg:h-full lg:w-screen lg:items-center lg:px-12"
          >
            <div
              className={`grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-12 transition-opacity duration-500 ${
                active === index ? "lg:opacity-100" : "lg:opacity-40"
              }`}
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#93C5FD]">
                    {stage.number}
                  </span>
                  <span className="h-px w-10 bg-white/20" />
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/35">
                    Stage
                  </span>
                </div>
                <h3 className="mt-4 text-[clamp(1.6rem,3vw,2.35rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-white">
                  {stage.title}
                </h3>
                <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-white/55">
                  {stage.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {stage.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/60"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7">
                <BrowserFrame
                  tone="dark"
                  src={stage.image}
                  alt={stage.imageAlt}
                  label={stage.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PinnedStory;
