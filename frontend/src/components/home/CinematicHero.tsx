import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import Magnetic from "@/components/Magnetic";
import BrowserFrame from "./BrowserFrame";
import { hubScreens } from "@/lib/command-content";

const headlineLines: { text: string; accent?: boolean }[][] = [
  [{ text: "One" }, { text: "Command" }, { text: "Centre." }],
  [{ text: "Complete" }, { text: "Business" }, { text: "Control." }],
];

const particles = [
  { left: "8%", top: "72%", delay: 0, duration: 16, size: 2 },
  { left: "17%", top: "38%", delay: 2.4, duration: 19, size: 1 },
  { left: "26%", top: "84%", delay: 1.2, duration: 21, size: 2 },
  { left: "34%", top: "22%", delay: 3.6, duration: 17, size: 1 },
  { left: "46%", top: "64%", delay: 0.8, duration: 23, size: 2 },
  { left: "55%", top: "30%", delay: 2, duration: 18, size: 1 },
  { left: "63%", top: "78%", delay: 3.1, duration: 20, size: 2 },
  { left: "71%", top: "18%", delay: 1.6, duration: 22, size: 1 },
  { left: "79%", top: "58%", delay: 0.4, duration: 19, size: 2 },
  { left: "86%", top: "34%", delay: 2.8, duration: 17, size: 1 },
  { left: "93%", top: "70%", delay: 3.9, duration: 24, size: 2 },
  { left: "12%", top: "52%", delay: 1.1, duration: 20, size: 1 },
];

const highlights = ["Connected workspaces", "Real-time handoffs", "Management visibility"];

const CinematicHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 55, damping: 18, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 55, damping: 18, mass: 0.4 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [5, -5]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [-3.5, 3.5]);

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const scope = sectionRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from("[data-hero-eyebrow]", { y: 16, opacity: 0, duration: 0.7 }, 0.15)
        .from(
          "[data-hero-word]",
          { yPercent: 118, opacity: 0, duration: 1.05, stagger: 0.055 },
          0.3,
        )
        .from("[data-hero-copy]", { y: 22, opacity: 0, duration: 0.8 }, "-=0.6")
        .from("[data-hero-cta]", { y: 18, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.5")
        .from(
          "[data-hero-mockup]",
          { y: 80, scale: 0.965, opacity: 0, duration: 1.3, ease: "power2.out" },
          "-=0.4",
        )
        .from("[data-hero-meta]", { opacity: 0, y: 10, duration: 0.6 }, "-=0.75");
    }, scope);

    return () => ctx.revert();
  }, [prefersReduced]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#071A36] text-white"
    >
      {/* Layered background: fine grid, ambient light, drifting particles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148, 190, 255, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 190, 255, 0.055) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-hero-drift pointer-events-none absolute -top-56 left-1/2 h-[640px] w-[min(1100px,95vw)] -translate-x-1/2 rounded-full bg-[#2563EB]/25 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="animate-hero-drift-slow pointer-events-none absolute bottom-[-18%] right-[-12%] h-[560px] w-[560px] rounded-full bg-[#3B82F6]/15 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {particles.map((particle, index) => (
          <span
            key={index}
            className="animate-hero-particle absolute rounded-full bg-[#93C5FD]"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#071A36]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 pt-32 sm:px-6 sm:pb-24 md:px-8 md:pt-36 lg:px-12 lg:pb-28">
        <div className="max-w-5xl xl:max-w-6xl">
          <div
            data-hero-eyebrow
            className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#60A5FA] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#93C5FD]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/65">
              WhizUnik Command — Business Operating System
            </span>
          </div>

          <h1 className="mt-7 text-[clamp(2.4rem,5.2vw,5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
            {headlineLines.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.map((word, wordIndex) => (
                  <span
                    key={`${lineIndex}-${wordIndex}`}
                    className="inline-block overflow-hidden align-bottom"
                  >
                    <span
                      data-hero-word
                      className={`inline-block will-change-transform ${
                        lineIndex === 1 && wordIndex === 0
                          ? "font-headline font-normal italic tracking-[-0.02em] text-[#9CC3F2]"
                          : ""
                      }`}
                    >
                      {word.text}
                    </span>
                    {wordIndex < line.length - 1 ? (
                      <span aria-hidden="true">&nbsp;</span>
                    ) : null}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p
            data-hero-copy
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-base"
          >
            Connect sales, procurement, manufacturing, inventory and finance through one
            intelligent business operating system.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div data-hero-cta>
              <Magnetic>
                <Link
                  to="/contact?type=walkthrough"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-primary px-6 text-[13.5px] font-semibold text-white shadow-[0_18px_50px_-14px_rgba(37,99,235,0.75)] transition-all duration-200 hover:bg-[#3B82F6] hover:shadow-[0_22px_60px_-14px_rgba(59,130,246,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071A36] sm:w-auto"
                >
                  Request a Walkthrough
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </Magnetic>
            </div>

            <div data-hero-cta>
              <a
                href="#platform"
                className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg border border-white/15 bg-white/[0.04] px-6 text-[13.5px] font-semibold text-white/85 backdrop-blur-sm transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.08] hover:text-white sm:w-auto"
              >
                Explore the Platform
                <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </div>
          </div>

          <ul
            data-hero-meta
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11.5px] text-white/45"
          >
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#60A5FA]" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Product centrepiece */}
        <div
          data-hero-mockup
          className="relative mx-auto mt-14 max-w-6xl sm:mt-16"
          style={{ perspective: "1800px" }}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 -bottom-8 h-24 rounded-full bg-[#1D4ED8]/40 blur-[70px]"
          />
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <BrowserFrame
              priority
              tone="dark"
              src={hubScreens.dashboard}
              alt="WhizUnik Command executive dashboard showing sales, finance, inventory and approval metrics"
              label="WhizUnik Command — Executive Dashboard"
            />
          </motion.div>

          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
            Live product interface — illustrative workspace data
          </p>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
