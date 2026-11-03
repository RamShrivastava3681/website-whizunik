import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import TextReveal from "@/components/home/TextReveal";
import Magnetic from "@/components/Magnetic";

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden border-t border-border bg-card py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-[360px] w-[420px] -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <p className="eyebrow">WhizUnik</p>
            <TextReveal
              as="h2"
              text="Better-connected businesses begin with better-connected systems."
              className="text-balance mt-5 max-w-3xl text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground"
            />
            <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
              Discover how WhizUnik can help bring your business operations together.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Magnetic>
                <Link
                  to="/how-it-works"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-primary px-6 text-[13px] font-semibold text-white shadow-[0_18px_44px_-16px_rgba(37,99,235,0.8)] transition-colors hover:bg-[#1D4ED8] sm:w-auto"
                >
                  Explore Our Solutions
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </Magnetic>
              <Link
                to="/contact"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-[13px] font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary sm:w-auto"
              >
                <Mail size={15} />
                Contact WhizUnik
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
