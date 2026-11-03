import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import useIsDesktop from "@/hooks/useIsDesktop";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import ButtonLink from "@/components/site/ButtonLink";
import Container from "@/components/site/Container";
import { cn } from "@/lib/utils";
import { platformPhases, type Phase } from "./platformContent";
import {
  ConnectionPath,
  FloatingCard,
  FloatingWindow,
  GridBackdrop,
  ProgressRail,
} from "./StagePrimitives";
import { FactoryPanels, FactoryScene } from "./FactoryScene";
import { EcosystemScene } from "./EcosystemScene";

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

const cardPlacements = [
  "-left-4 top-0",
  "-right-4 -top-4",
  "-left-4 bottom-0",
  "-right-4 bottom-6",
  "-left-18 top-1/3",
  "-right-18 bottom-1/3",
];

const nextPhase = (index: number) => platformPhases[index + 1];

const PhaseCopy = ({ phase, muted = false }: { phase: Phase; muted?: boolean }) => (
  <div>
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10.5px] text-brand-teal">{phase.number}</span>
      <span className="h-px w-8 bg-border" />
      <span
        className={cn(
          "font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground",
          muted && "text-white/55",
        )}
      >
        {phase.navLabel}
      </span>
    </div>
    <h2
      data-reveal
      className="mt-4 text-[clamp(1.75rem,2.6vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-balance"
    >
      {phase.title}
    </h2>
    <p data-reveal className="mt-4 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
      {phase.description}
    </p>
  </div>
);

const WorkspaceVisual = ({ phase, index }: { phase: Phase; index: number }) => {
  if (!phase.screen) return null;
  return (
    <div className="relative" style={{ perspective: "1500px" }}>
      <div
        style={{
          transform: `rotateY(${phase.side === "left" ? -6 : 6}deg) rotateX(1.4deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <FloatingWindow screen={phase.screen} priority={index <= 2} />
      </div>

      {phase.cards.map((card, cardIndex) => (
        <div
          key={card.label}
          data-reveal
          data-depth={cardIndex % 2 === 0 ? "near" : "far"}
          className={cn(
            "absolute z-20",
            cardPlacements[cardIndex] ?? "left-4 top-4",
            cardIndex >= 4 ? "hidden xl:block" : "hidden lg:block",
          )}
          style={{ transform: `translateZ(${28 + cardIndex * 10}px)` }}
        >
          <FloatingCard card={card} animate />
        </div>
      ))}

      {nextPhase(index) && nextPhase(index)?.variant !== "ecosystem" && (
        <div className="absolute -bottom-10 right-0 z-20 flex items-center gap-2">
          <svg width="74" height="26" viewBox="0 0 74 26" fill="none" aria-hidden="true">
            <ConnectionPath d="M2 4 C 26 4, 44 10, 68 22" />
          </svg>
          <span className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-muted-foreground whitespace-nowrap">
            {nextPhase(index)?.navLabel}
          </span>
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Intro                                                               */
/* ------------------------------------------------------------------ */

const orbitNodes = [
  { label: "Sales", className: "left-[5%] top-[16%]" },
  { label: "Procurement", className: "left-[2%] top-[46%]" },
  { label: "Finance", className: "left-[7%] top-[76%]" },
  { label: "Factory", className: "right-[6%] top-[14%]" },
  { label: "Warehouse", className: "right-[2%] top-[45%]" },
  { label: "Workflow", className: "right-[7%] top-[75%]" },
  { label: "Inventory", className: "bottom-[5%] left-1/2 -translate-x-1/2" },
];

const networkPaths = [
  "M500,300 C410,240 240,160 120,110",
  "M500,300 C420,290 250,290 80,270",
  "M500,300 C420,350 250,420 110,450",
  "M500,300 C590,240 760,160 880,110",
  "M500,300 C590,290 760,290 920,270",
  "M500,300 C590,350 760,430 890,455",
  "M500,300 C500,360 500,430 500,505",
];

const IntroScene = () => (
  <div data-scene className="absolute inset-0">
    <GridBackdrop />
    <svg
      viewBox="0 0 1000 560"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      {networkPaths.map((d) => (
        <path
          key={d}
          data-network-path
          d={d}
          fill="none"
          stroke="hsl(var(--primary) / 0.22)"
          strokeWidth="1"
          strokeDasharray="300"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {networkPaths.map((d) => (
        <circle key={d} r="2.4" fill="hsl(var(--brand-teal))" opacity="0.55">
          <animateMotion dur="9s" repeatCount="indefinite" path={d} />
        </circle>
      ))}
    </svg>

    <div className="relative flex h-full items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <p data-intro className="eyebrow">
          The Platform
        </p>
        <h2
          id="platform-title"
          data-intro
          className="mt-4 text-[clamp(2.1rem,4.4vw,3.9rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-balance"
        >
          Every moving part.
          <br />
          <span className="text-muted-foreground">One intelligent system.</span>
        </h2>
        <p data-intro className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
          Connected workspaces, one transaction record. Each department gets a dedicated working
          environment while the business operates as one.
        </p>
        <div data-intro className="mt-7 flex items-center justify-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
          <ArrowDown size={13} aria-hidden="true" />
          Scroll to enter the platform
        </div>
      </div>
    </div>

    {orbitNodes.map((node, index) => (
      <div
        key={node.label}
        data-orbit
        className={cn(
          "absolute hidden items-center gap-2 rounded-md border border-border/80 bg-card/80 px-2.5 py-1.5 backdrop-blur-sm xl:flex",
          node.className,
        )}
        style={{ transform: `translateZ(${index % 2 ? 20 : 0}px)` }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
          {node.label}
        </span>
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/* Factory phase                                                       */
/* ------------------------------------------------------------------ */

const FactoryPhase = ({ phase }: { phase: Phase }) => (
  <div data-scene className="absolute inset-0">
    <GridBackdrop className="opacity-70" />
    <div className="relative flex h-full items-center px-6 pb-10 pt-16">
      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-12 items-center gap-8">
        <div className="col-span-4">
          <PhaseCopy phase={phase} />
          <p data-reveal className="mt-5 max-w-sm border-t border-border pt-4 text-[12px] leading-relaxed text-muted-foreground">
            Production activity is recorded against the same order, material and dispatch record the
            rest of the business works from.
          </p>
        </div>
        <div className="relative col-span-8">
          <div data-reveal>
            <FactoryScene />
          </div>
          <FactoryPanels />
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Ecosystem phase                                                     */
/* ------------------------------------------------------------------ */

const EcosystemPhase = ({ phase }: { phase: Phase }) => (
  <div data-scene className="absolute inset-0">
    <GridBackdrop />
    <div className="relative flex h-full flex-col items-center justify-center px-6 pb-12 pt-16 text-center">
      <p data-reveal className="eyebrow">
        Connected ecosystem
      </p>
      <h2
        data-reveal
        id={undefined}
        className="mt-3 max-w-2xl text-[clamp(1.7rem,2.8vw,2.6rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-balance"
      >
        {phase.title}
      </h2>
      <p data-reveal className="mt-3 max-w-lg text-[13.5px] leading-relaxed text-muted-foreground">
        {phase.description}
      </p>

      <div data-reveal className="mt-5 w-full max-w-4xl">
        <EcosystemScene />
      </div>

      <div data-reveal className="mt-7 flex flex-col gap-2.5 sm:flex-row">
        <ButtonLink to="/command" size="default" withArrow>
          Explore Whizunik Command
        </ButtonLink>
        <ButtonLink to="/contact?type=walkthrough" variant="secondary" size="default">
          Request a walkthrough
          <ArrowRight size={14} aria-hidden="true" />
        </ButtonLink>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Desktop pinned experience                                           */
/* ------------------------------------------------------------------ */

const DesktopExperience = () => {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;

    let cancelled = false;

    const ctx = gsap.context(() => {
      const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]", root);
      if (!scenes.length) return;

      gsap.set(scenes, { autoAlpha: 0 });
      gsap.set(scenes[0], { autoAlpha: 1 });

      /* One-time intro entrance */
      const introItems = scenes[0]?.querySelectorAll("[data-intro]");
      if (introItems?.length) {
        gsap.from(introItems, {
          y: 22,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          delay: 0.15,
          ease: "power3.out",
        });
      }
      const networkPaths = scenes[0]?.querySelectorAll("[data-network-path]");
      if (networkPaths?.length) {
        gsap.from(networkPaths, {
          strokeDashoffset: 300,
          duration: 1.5,
          stagger: 0.08,
          delay: 0.35,
          ease: "power2.out",
        });
      }
      const orbit = scenes[0]?.querySelectorAll("[data-orbit]");
      if (orbit?.length) {
        gsap.from(orbit, { opacity: 0, y: 8, duration: 0.6, stagger: 0.06, delay: 0.7 });
      }

      const factoryIndex = platformPhases.findIndex((phase) => phase.variant === "factory");
      const factoryScene = scenes[factoryIndex];
      const factoryStations = factoryScene?.querySelectorAll("[data-factory-station]");
      const factoryPanels = factoryScene?.querySelectorAll("[data-factory-panel]");
      const factoryPath = factoryScene?.querySelector("[data-factory-path]");
      const factoryContainers = factoryScene?.querySelectorAll("[data-factory-container]");

      if (factoryStations?.length) gsap.set(factoryStations, { opacity: 0 });
      if (factoryPanels?.length) gsap.set(factoryPanels, { opacity: 0 });

      const ecoIndex = platformPhases.findIndex((phase) => phase.variant === "ecosystem");
      const ecoScene = scenes[ecoIndex];
      const ecoNodes = ecoScene?.querySelectorAll("[data-eco-node]");
      const ecoLinks = ecoScene?.querySelectorAll("[data-eco-connection]");
      if (ecoNodes?.length) gsap.set(ecoNodes, { opacity: 0, y: 14 });
      if (ecoLinks?.length) gsap.set(ecoLinks, { opacity: 0.15, strokeDashoffset: 120 });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 8)}`,
          pin: stage,
          pinSpacing: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${Math.round(self.progress * 100)}%`;
            }
            const nextIndex = Math.min(
              platformPhases.length - 1,
              Math.floor(self.progress * platformPhases.length + 0.35),
            );
            setCurrent((previous) => (previous === nextIndex ? previous : nextIndex));
          },
        },
      });

      platformPhases.forEach((_, index) => {
        if (index === 0) return;
        const entering = scenes[index];
        const leaving = scenes[index - 1];
        if (!entering || !leaving) return;

        timeline.to(
          leaving,
          { autoAlpha: 0, duration: 0.45, ease: "power1.inOut" },
          index - 0.5,
        );
        timeline.to(
          entering,
          { autoAlpha: 1, duration: 0.45, ease: "power1.inOut" },
          index - 0.42,
        );
        timeline.fromTo(
          entering.querySelectorAll("[data-reveal]"),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
            immediateRender: false,
          },
          index - 0.38,
        );
      });

      if (factoryStations?.length) {
        timeline.fromTo(
          factoryStations,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          factoryIndex - 0.3,
        );
      }
      if (factoryPanels?.length) {
        timeline.fromTo(
          factoryPanels,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power2.out" },
          factoryIndex - 0.2,
        );
      }
      if (factoryPath) {
        timeline.fromTo(
          factoryPath,
          { strokeDashoffset: 260 },
          { strokeDashoffset: 0, duration: 1.3, ease: "power1.inOut" },
          factoryIndex - 0.35,
        );
      }
      factoryContainers?.forEach((container, index) => {
        timeline.to(
          container,
          { x: 508, y: -8, duration: 1.6, ease: "none" },
          factoryIndex - 0.35 + index * 0.12,
        );
      });

      if (ecoNodes?.length) {
        timeline.fromTo(
          ecoNodes,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out" },
          ecoIndex - 0.3,
        );
      }
      if (ecoLinks?.length) {
        timeline.fromTo(
          ecoLinks,
          { opacity: 0.15, strokeDashoffset: 120 },
          { opacity: 1, strokeDashoffset: 0, duration: 0.9, stagger: 0.06, ease: "power2.out" },
          ecoIndex - 0.25,
        );
      }

      /* Keep the timeline scroll-length stable regardless of content count */
      timeline.to({}, { duration: 0.2 }, platformPhases.length);
    }, root);

    const refresh = () => {
      if (!cancelled) ScrollTrigger.refresh();
    };
    const timer = window.setTimeout(refresh, 240);
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh).catch(() => undefined);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="platform"
      aria-labelledby="platform-title"
      className="relative border-y border-border bg-background"
    >
      <div ref={stageRef} className="relative h-[100svh] overflow-hidden">
        <IntroScene />

        {platformPhases.map((phase, index) => {
          if (phase.variant === "intro") return null;
          if (phase.variant === "factory") {
            return <FactoryPhase key={phase.id} phase={phase} />;
          }
          if (phase.variant === "ecosystem") {
            return <EcosystemPhase key={phase.id} phase={phase} />;
          }

          return (
            <div key={phase.id} data-scene className="absolute inset-0">
              <div className="relative flex h-full items-center px-6 pb-10 pt-16">
                <div className="mx-auto grid w-full max-w-[1160px] grid-cols-12 items-center gap-8">
                  <div className={cn("col-span-4", phase.side === "right" && "order-2")}>
                    <PhaseCopy phase={phase} />
                  </div>
                  <div className={cn("col-span-8", phase.side === "right" && "order-1")}>
                    <div data-reveal>
                      <WorkspaceVisual phase={phase} index={index} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <ProgressRail phases={platformPhases} current={current} progressRef={progressRef} />
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Static / mobile / reduced-motion story                              */
/* ------------------------------------------------------------------ */

const PhaseVisual = ({ phase, index }: { phase: Phase; index: number }) => {
  if (phase.variant === "factory") {
    return (
      <div>
        <FactoryScene />
        <FactoryPanels variant="mobile" />
      </div>
    );
  }
  if (phase.variant === "ecosystem") {
    return <EcosystemScene variant="mobile" />;
  }
  return <WorkspaceVisual phase={phase} index={index} />;
};

const StaticStory = () => {
  const reduced = useReducedMotion();

  return (
    <section id="platform" aria-labelledby="platform-title" className="border-y border-border bg-background">
      <div className="relative overflow-hidden border-b border-border">
        <GridBackdrop />
        <Container className="relative py-14 md:py-20">
          <p className="eyebrow">The Platform</p>
          <h2 id="platform-title" className="mt-4 max-w-2xl text-display text-balance">
            Every moving part.
            <br />
            <span className="text-muted-foreground">One intelligent system.</span>
          </h2>
          <p className="mt-4 max-w-xl text-lede">
            Connected workspaces, one transaction record. Each department gets a dedicated working
            environment while the business operates as one.
          </p>
        </Container>
      </div>

      {platformPhases.slice(1).map((phase, index) => (
        <div key={phase.id} className="border-b border-border py-12 md:py-16">
          <Container>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10.5px] text-brand-teal">{phase.number}</span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                {phase.navLabel}
              </span>
            </div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <h3 className="mt-3 max-w-xl text-section-title">{phase.title}</h3>
              <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-muted-foreground">
                {phase.description}
              </p>

              <div className={cn("mt-7", phase.variant === "workspace" || phase.variant === "forecast" ? "relative" : "")}>
                <PhaseVisual phase={phase} index={index + 1} />
              </div>

              {phase.cards.length > 0 && (
                <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {phase.cards.map((card) => (
                    <FloatingCard key={card.label} card={card} className="w-auto" />
                  ))}
                </div>
              )}

              {phase.variant === "ecosystem" && (
                <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                  <ButtonLink to="/command" withArrow>
                    Explore Whizunik Command
                  </ButtonLink>
                  <ButtonLink to="/contact?type=walkthrough" variant="secondary">
                    Request a walkthrough
                  </ButtonLink>
                </div>
              )}
            </motion.div>
          </Container>
        </div>
      ))}
    </section>
  );
};

/* ------------------------------------------------------------------ */

const PlatformExperience = () => {
  const isDesktop = useIsDesktop();
  const prefersReducedMotion = usePrefersReducedMotion();

  return isDesktop && !prefersReducedMotion ? <DesktopExperience /> : <StaticStory />;
};

export default PlatformExperience;
