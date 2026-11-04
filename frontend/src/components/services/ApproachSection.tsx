import { Info } from "lucide-react";
import TextReveal from "@/components/home/TextReveal";
import { principles } from "@/lib/advisory-content";

const ApproachSection = () => {
  return (
    <section className="relative border-b border-border bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">The advisory approach</p>
            <TextReveal
              as="h2"
              text="Beyond capital. A strategic approach to financing."
              className="text-balance mt-4 text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-foreground"
            />

            <div className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-muted-foreground">
              <p>
                Capital is rarely the first problem. The first problem is understanding what the
                business actually needs — which transaction is constrained, how the cash cycle
                behaves, and what the obligations around it look like.
              </p>
              <p>
                This practice works with established businesses on precisely that question. We start
                from the commercial structure, assess the requirement against real operating
                information, and discuss financing pathways that fit the way the business trades.
              </p>
              <p>
                Advisory is a structured conversation, not a catalogue. Where a business is not ready
                for a particular pathway, that is a useful finding — and it is stated plainly.
              </p>
            </div>

            <div className="mt-8 flex items-start gap-2.5 rounded-xl border border-border bg-surface-container px-4 py-4">
              <Info size={14} className="mt-0.5 shrink-0 text-muted-foreground" />
              <p className="text-[11.5px] leading-relaxed text-muted-foreground">
                Advisory does not constitute an offer, commitment or guarantee of financing. Any
                facility remains subject to assessment, documentation and applicable approvals by the
                relevant counterparties.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
              Three principles
            </p>
            <ol className="mt-4 border-t border-border">
              {principles.map((principle) => (
                <li key={principle.number} className="border-b border-border py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] text-[#9A8B72]">{principle.number}</span>
                    <div>
                      <h3 className="font-headline text-[19px] font-medium leading-snug tracking-[-0.015em] text-foreground">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
