import { motion } from "framer-motion";
import TextReveal from "@/components/home/TextReveal";
import { approachSteps, operatingDisciplines } from "@/lib/about-content";

const AboutApproach = () => {
  return (
    <section className="relative border-b border-border bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Our approach</p>
            <TextReveal
              as="h2"
              text="How we approach a business problem."
              className="text-balance mt-4 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground"
            />
            <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
              Engagements begin with the operating reality of the business, not with a software
              demonstration. The sequence below is the same whether the outcome is a Command
              implementation or a capital conversation.
            </p>

            <ol className="mt-10 border-t border-border">
              {approachSteps.map((step, index) => (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="grid grid-cols-[40px_1fr] gap-4 border-b border-border py-6 sm:grid-cols-[56px_1fr] sm:gap-6"
                >
                  <span className="font-mono text-[10.5px] tracking-[0.1em] text-[#9A8B72]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-[15.5px] font-semibold leading-snug text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-lg text-[12.5px] leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-7 sm:p-8">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                How we operate
              </p>
              <p className="mt-4 text-[13.5px] leading-relaxed text-muted-foreground">
                Every desk — sales, procurement, checker verification, treasury and warehouse — is
                structured with clear ownership and segregation of duties. The product reflects those
                controls rather than working around them.
              </p>

              <ul className="mt-7 space-y-5 border-t border-border pt-6">
                {operatingDisciplines.map((discipline) => (
                  <li key={discipline.title}>
                    <h4 className="text-[13px] font-semibold text-foreground">
                      {discipline.title}
                    </h4>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
                      {discipline.description}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-7 border-t border-border pt-5 text-[11.5px] leading-relaxed text-muted-foreground/80">
                Our team combines experience across structured finance, supply chain operations,
                software architecture and corporate treasury.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutApproach;
