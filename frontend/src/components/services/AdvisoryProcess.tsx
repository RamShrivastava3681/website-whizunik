import { Info } from "lucide-react";
import TextReveal from "@/components/home/TextReveal";
import { processSteps } from "@/lib/advisory-content";

const AdvisoryProcess = () => {
  return (
    <section className="relative border-b border-border bg-surface-container py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Advisory process</p>
            <TextReveal
              as="h2"
              text="A defined sequence, not an open-ended pitch."
              className="text-balance mt-4 text-[clamp(1.9rem,3.9vw,3rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-foreground"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              Each stage produces a clear output. If the business is not ready for a particular
              pathway, that is identified before time is spent pursuing it.
            </p>
          </div>
        </div>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.number} className="bg-card p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9A8B72]">
                  {step.number}
                </span>
                <span className="h-px w-8 bg-border" />
              </div>
              <h3 className="mt-4 font-headline text-[17px] font-medium leading-snug tracking-[-0.015em] text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-border bg-card px-4 py-3.5">
          <Info size={13} className="mt-0.5 shrink-0 text-muted-foreground" />
          <p className="text-[11.5px] leading-relaxed text-muted-foreground">
            Outcomes depend on assessment, documentation and applicable approvals. Progression through
            this process does not imply that financing will be approved or made available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryProcess;
