import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import TextReveal from "@/components/home/TextReveal";

const HowCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#071A36] py-20 text-white sm:py-24">
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
        aria-hidden="true"
        className="animate-hero-drift-slow pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[min(900px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/25 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 text-center sm:px-6 md:px-8 lg:px-12">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#93C5FD]">
          One operating environment
        </p>
        <TextReveal
          as="h2"
          text="See how your business can operate as one."
          className="mx-auto mt-5 max-w-3xl text-[clamp(2.1rem,5vw,3.8rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-white"
        />

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Magnetic>
            <Link
              to="/contact?type=walkthrough"
              className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-primary px-6 text-[13.5px] font-semibold text-white shadow-[0_18px_50px_-14px_rgba(37,99,235,0.8)] transition-colors hover:bg-[#3B82F6] sm:w-auto"
            >
              Request a Walkthrough
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </Magnetic>
          <a
            href="mailto:sankalp@whizunik.com"
            className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg border border-white/15 bg-white/[0.04] px-6 text-[13.5px] font-semibold text-white/85 transition-colors hover:border-white/30 hover:text-white sm:w-auto"
          >
            <Mail size={15} />
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowCTA;
