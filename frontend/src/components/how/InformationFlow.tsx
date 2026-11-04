import { useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import TextReveal from "@/components/home/TextReveal";
import { flowSteps } from "@/lib/how-content";

const InformationFlow = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeStep = flowSteps[activeIndex];

  return (
    <section className="relative border-b border-border bg-surface-container py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Information flow</p>
            <TextReveal
              as="h2"
              text="One transaction. Every department that touches it."
              className="text-balance mt-4 text-[clamp(1.9rem,3.9vw,3rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-foreground"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              Select a stage to see what happens inside it. The shape below is one common path — real
              workflows are configured to how your business operates.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-4 shadow-card sm:p-6">
          {/* Desktop rail */}
          <div className="relative hidden lg:block">
            <div className="absolute left-[7.142%] right-[7.142%] top-[19px] h-[2px] bg-border">
              <div
                className="h-full bg-primary transition-[width] duration-500"
                style={{ width: `${(activeIndex / (flowSteps.length - 1)) * 100}%` }}
              />
            </div>
            <div className="relative grid grid-cols-7 gap-2">
              {flowSteps.map((step, index) => {
                const isActive = index === activeIndex;
                const isPast = index < activeIndex;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className="group flex flex-col items-center text-center focus-visible:outline-none"
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border font-mono text-[10.5px] transition-all duration-300 ${
                        isActive
                          ? "border-primary bg-primary text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.8)]"
                          : isPast
                            ? "border-primary/40 bg-primary/10 text-primary"
                            : "border-border bg-card text-muted-foreground group-hover:border-primary/40 group-hover:text-primary"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`mt-3 text-[11.5px] font-semibold leading-snug transition-colors ${
                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile list */}
          <div className="space-y-2 lg:hidden">
            {flowSteps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`flex w-full items-start gap-3 rounded-lg border px-3.5 py-3 text-left transition-colors ${
                    isActive
                      ? "border-primary/35 bg-primary/[0.06]"
                      : "border-border bg-card hover:border-primary/25"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[9px] ${
                      isActive
                        ? "border-primary bg-primary text-white"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-[12.5px] font-semibold text-foreground">
                      {step.label}
                    </span>
                    <span className="mt-0.5 block text-[12px] leading-relaxed text-muted-foreground">
                      {step.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active stage detail */}
          <div className="mt-6 hidden items-start gap-4 rounded-xl border border-primary/20 bg-primary/[0.04] px-4 py-4 lg:flex">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-[10px] font-semibold text-primary">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-[13px] font-semibold text-foreground">{activeStep.label}</p>
              <p className="mt-1 max-w-2xl text-[12.5px] leading-relaxed text-muted-foreground">
                {activeStep.description}
              </p>
            </div>
            <span className="ml-auto hidden shrink-0 items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-primary xl:flex">
              Stage detail
              <ArrowRight size={11} />
            </span>
          </div>

          <div className="mt-5 flex items-start gap-2 border-t border-border pt-4">
            <Info size={13} className="mt-0.5 shrink-0 text-muted-foreground" />
            <p className="text-[11.5px] leading-relaxed text-muted-foreground">
              Actual workflows depend on business configuration. Some stages run in parallel, some
              are optional, and approvals are applied where your operating rules require them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationFlow;
