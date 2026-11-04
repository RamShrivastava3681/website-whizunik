import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import TextReveal from "@/components/home/TextReveal";
import Magnetic from "@/components/Magnetic";
import { solutionAreas } from "@/lib/about-content";

const SolutionsSection = () => {
  return (
    <section className="relative border-b border-border bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <TextReveal
            as="h2"
            text="Two practices. One understanding of how business operates."
            className="text-balance mt-4 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground"
          />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {solutionAreas.map((area) => {
            const dark = area.tone === "dark";

            return (
              <article
                key={area.id}
                className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-7 sm:p-9 lg:p-10 ${
                  dark
                    ? "border-white/10 bg-[#071A36] text-white"
                    : "border-border bg-background text-foreground"
                }`}
              >
                {dark && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-70"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(148, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 190, 255, 0.05) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#1D4ED8]/25 blur-[100px]"
                    />
                  </>
                )}

                <div className="relative">
                  <p
                    className={`font-mono text-[9.5px] uppercase tracking-[0.2em] ${
                      dark ? "text-[#93C5FD]" : "text-[#9A8B72]"
                    }`}
                  >
                    {area.eyebrow}
                  </p>
                  <h3
                    className={`mt-4 text-[clamp(1.4rem,2.4vw,1.9rem)] font-semibold leading-[1.12] tracking-[-0.03em] ${
                      dark ? "text-white" : "text-foreground"
                    }`}
                  >
                    {area.title}
                  </h3>
                  <p
                    className={`mt-4 text-[13.5px] leading-relaxed ${
                      dark ? "text-white/55" : "text-muted-foreground"
                    }`}
                  >
                    {area.description}
                  </p>

                  <ul
                    className={`mt-7 space-y-2.5 border-t pt-6 ${
                      dark ? "border-white/10" : "border-border"
                    }`}
                  >
                    {area.points.map((point) => (
                      <li
                        key={point}
                        className={`flex items-start gap-2.5 text-[12.5px] leading-relaxed ${
                          dark ? "text-white/65" : "text-foreground/75"
                        }`}
                      >
                        <Check
                          size={13}
                          className={`mt-0.5 shrink-0 ${dark ? "text-[#93C5FD]" : "text-primary"}`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-8">
                  <Magnetic>
                    <Link
                      to={area.cta.to}
                      className={`group inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-[12.5px] font-semibold transition-colors ${
                        dark
                          ? "bg-primary text-white shadow-[0_16px_44px_-16px_rgba(37,99,235,0.9)] hover:bg-[#3B82F6]"
                          : "border border-foreground/15 bg-card text-foreground hover:border-primary/40 hover:text-primary"
                      }`}
                    >
                      {area.cta.label}
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </Magnetic>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
