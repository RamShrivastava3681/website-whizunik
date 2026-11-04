import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import TextReveal from "./TextReveal";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const CinematicCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      gsap.from("[data-cta-actions]", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
      });
    }, section);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#071A36] py-24 text-white sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148, 190, 255, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 190, 255, 0.045) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[min(1000px,95vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/25 blur-[160px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 text-center sm:px-6 md:px-8 lg:px-12">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#93C5FD]">
          WhizUnik Command
        </p>

        <TextReveal
          as="h2"
          text="Take command of your business."
          className="mx-auto mt-6 max-w-4xl text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white"
        />

        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/55">
          Bring your business operations together. Discover what WhizUnik Command can do for your
          organization.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <div data-cta-actions>
            <Magnetic>
              <Link
                to="/contact?type=walkthrough"
                className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-primary px-6 text-[13.5px] font-semibold text-white shadow-[0_18px_50px_-14px_rgba(37,99,235,0.8)] transition-all duration-200 hover:bg-[#3B82F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071A36] sm:w-auto"
              >
                Request a Walkthrough
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Magnetic>
          </div>

          <div data-cta-actions>
            <Link
              to="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg border border-white/15 bg-white/[0.04] px-6 text-[13.5px] font-semibold text-white/85 backdrop-blur-sm transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.08] hover:text-white sm:w-auto"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-[12px] text-white/40 sm:flex-row sm:gap-7">
          <a
            href="mailto:sankalp@whizunik.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-white/70"
          >
            <Mail size={13} />
            sankalp@whizunik.com
          </a>
          <a
            href="tel:+917045941942"
            className="inline-flex items-center gap-2 transition-colors hover:text-white/70"
          >
            <Phone size={13} />
            +91-7045941942
          </a>
        </div>
      </div>
    </section>
  );
};

export default CinematicCTA;
