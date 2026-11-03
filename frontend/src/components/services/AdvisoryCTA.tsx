import { Link } from "react-router-dom";
import { ArrowUpRight, Info } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import TextReveal from "@/components/home/TextReveal";

const AdvisoryCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#071A36] py-20 text-white sm:py-24 lg:py-28">
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
        className="animate-hero-drift-slow pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[min(900px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1D4ED8]/25 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C7B9A1]/60" />
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C7B9A1]">
                Enquiry
              </p>
            </div>
            <TextReveal
              as="h2"
              text="Let's understand your capital requirements."
              className="text-balance mt-5 text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white"
            />
            <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-white/55">
              Tell us about your business, transaction structure and funding requirements. Our team
              can discuss the next steps.
            </p>
          </div>

          <div className="lg:col-span-5 lg:text-right">
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
            <p className="mt-4 inline-flex items-start gap-2 text-left font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-white/30">
              <Info size={12} className="mt-px shrink-0" />
              Subject to assessment and applicable approvals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryCTA;
