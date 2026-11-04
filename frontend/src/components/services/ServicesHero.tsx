import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import TextReveal from "@/components/home/TextReveal";
import Magnetic from "@/components/Magnetic";
import heroImage from "@/assets/about-architecture.jpg";

const focusAreas = ["Working capital", "Structured growth debt", "Lender readiness"];

const ServicesHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#071A36] text-white">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Architectural interior of a corporate office building"
          fetchPriority="high"
          className="h-full w-full scale-105 object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A36] via-[#071A36]/90 to-[#071A36]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A36] via-transparent to-[#071A36]/60" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 190, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 h-[380px] w-[520px] rounded-full bg-[#1D4ED8]/20 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 sm:px-6 sm:pb-20 md:px-8 md:pt-40 lg:px-12 lg:pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C7B9A1]/60" />
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#C7B9A1]">
              Strategic Capital Advisory
            </p>
          </div>

          <TextReveal
            as="h1"
            immediate
            text="Capital aligned with the way your business operates."
            className="text-balance mt-6 text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-white"
          />

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
            Strategic capital advisory for businesses navigating trade, working capital requirements
            and growth opportunities.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic>
              <Link
                to="/contact?type=advisory"
                className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-primary px-6 text-[13.5px] font-semibold text-white shadow-[0_18px_50px_-14px_rgba(37,99,235,0.75)] transition-colors hover:bg-[#3B82F6] sm:w-auto"
              >
                Discuss Your Requirements
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Magnetic>

            <Link
              to="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-6 text-[13.5px] font-semibold text-white/85 backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white sm:w-auto"
            >
              Speak With Our Team
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 sm:mt-16">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
            Advisory focus
          </span>
          {focusAreas.map((area) => (
            <span
              key={area}
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
