import { ArrowRight, Info } from "lucide-react";
import TextReveal from "@/components/home/TextReveal";
import { tradeStages } from "@/lib/advisory-content";

const requirementNotes = [
  {
    label: "Supplier payment requirements",
    description:
      "Advances, deposits or short supplier terms create an outflow before any revenue is realised.",
  },
  {
    label: "Working capital requirement",
    description:
      "The gap between purchasing and collection is funded by the business unless a facility bridges it.",
  },
  {
    label: "Shipment milestones",
    description:
      "Transit, inspection and documentation determine when goods can be invoiced and collected.",
  },
  {
    label: "Buyer payment terms",
    description:
      "Credit extended to the buyer lengthens the cycle, particularly with concentrated customers.",
  },
  {
    label: "Cash conversion cycle",
    description:
      "Payment out to payment in. The cycle length is the requirement the business has to carry.",
  },
];

const TradeFinanceSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#071A36] py-16 text-white sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148, 190, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 190, 255, 0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-[#1D4ED8]/20 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C7B9A1]">
              Trade finance context
            </p>
            <TextReveal
              as="h2"
              text="Where the funding requirement actually arises."
              className="text-balance mt-4 text-[clamp(1.9rem,3.9vw,3rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-white"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-relaxed text-white/55">
              A trade transaction is a sequence of commitments. Each stage moves cash, goods or
              documents — and the timing between them is what creates a capital requirement.
            </p>
          </div>
        </div>

        {/* Trade flow */}
        <div className="mt-12">
          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-[26px] hidden h-px bg-white/15 lg:block"
            />
            {tradeStages.map((stage, index) => (
              <div key={stage.number} className="relative">
                <div className="flex items-center gap-3 lg:block">
                  <span className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0A2141] font-mono text-[11px] text-[#93C5FD] lg:mx-0">
                    {stage.number}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 lg:mt-3 lg:block">
                    {stage.stage}
                  </span>
                  {index < tradeStages.length - 1 && (
                    <ArrowRight size={13} className="ml-auto text-white/25 sm:hidden" />
                  )}
                </div>

                <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:mt-2">
                  <p className="text-[12.5px] font-semibold text-white">{stage.title}</p>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/50">
                    {stage.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 border-t border-white/10 pt-2.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        stage.timing === "Cash out"
                          ? "bg-[#F59E0B]"
                          : stage.timing === "Cash in"
                            ? "bg-[#34D399]"
                            : "bg-[#60A5FA]"
                      }`}
                    />
                    <span className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-white/40">
                      {stage.timing}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cash position strip */}
          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
                Cash position across the transaction
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#C7B9A1]">
                Illustrative
              </span>
            </div>
            <div className="mt-3 flex h-2 overflow-hidden rounded-full">
              <div className="h-full w-[38%] bg-[#F59E0B]/70" />
              <div className="h-full w-[34%] bg-[#60A5FA]/60" />
              <div className="h-full w-[28%] bg-[#34D399]/70" />
            </div>
            <div className="mt-2.5 flex flex-wrap justify-between gap-2 font-mono text-[8.5px] uppercase tracking-[0.12em] text-white/35">
              <span>Payment out</span>
              <span className="text-white/55">Funding requirement</span>
              <span>Collection</span>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-12 grid gap-x-10 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {requirementNotes.map((note, index) => (
            <div key={note.label} className="flex gap-3">
              <span className="mt-0.5 font-mono text-[9.5px] text-white/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[12px] font-semibold text-white/85">{note.label}</p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-white/45">
                  {note.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-2.5 border-t border-white/10 pt-5">
          <Info size={13} className="mt-0.5 shrink-0 text-white/35" />
          <p className="max-w-3xl text-[11px] leading-relaxed text-white/40">
            This is an educational illustration of where requirements typically arise. Actual
            requirements depend on the transaction, agreed terms, counterparties and applicable
            approvals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TradeFinanceSection;
