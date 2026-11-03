import { ArrowRight, Boxes, Clock, EyeOff, FileStack, RefreshCw, Unplug } from "lucide-react";
import TextReveal from "@/components/home/TextReveal";
import { challenges } from "@/lib/how-content";

const icons = {
  unplug: Unplug,
  files: FileStack,
  refresh: RefreshCw,
  clock: Clock,
  eye: EyeOff,
  boxes: Boxes,
} as const;

const scattered = [
  { label: "Sales sheet", meta: "v4 · personal copy", x: "4%", y: "8%", rotate: "-2deg" },
  { label: "Email approvals", meta: "inbox thread", x: "52%", y: "2%", rotate: "1.5deg" },
  { label: "Purchase orders", meta: "shared folder", x: "8%", y: "52%", rotate: "1deg" },
  { label: "Warehouse count", meta: "printed yesterday", x: "48%", y: "60%", rotate: "-1.5deg" },
];

const ChallengeSection = () => {
  return (
    <section className="relative border-b border-border bg-surface-container py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-6">
            <p className="eyebrow">The business challenge</p>
            <TextReveal
              as="h2"
              text="Most operations run on handoffs that were never designed."
              className="text-balance mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground"
            />
            <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
              Growth adds people, products and locations faster than it adds process. The result is
              predictable: the same transaction lives in several places, and nobody can see the whole
              of it.
            </p>

            <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {challenges.map((challenge, index) => {
                const Icon = icons[challenge.icon];
                return (
                  <li key={challenge.id} className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-primary">
                      <Icon size={15} />
                    </span>
                    <div>
                      <p className="flex items-baseline gap-2 text-[13px] font-semibold text-foreground">
                        <span className="font-mono text-[9.5px] text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {challenge.title}
                      </p>
                      <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                        {challenge.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                  Where the transaction lives today
                </p>
                <span className="status-pill status-pill-danger">
                  <span className="h-1.5 w-1.5 rounded-full bg-danger" />
                  Not connected
                </span>
              </div>

              <div className="relative h-[210px] sm:h-[240px]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-xl border border-dashed border-border"
                />
                {scattered.map((item) => (
                  <div
                    key={item.label}
                    className="absolute w-[46%] rounded-lg border border-dashed border-border bg-surface-container px-3 py-2.5 shadow-xs"
                    style={{ left: item.x, top: item.y, rotate: item.rotate }}
                  >
                    <p className="text-[11.5px] font-semibold text-foreground/80">{item.label}</p>
                    <p className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-muted-foreground">
                      {item.meta}
                    </p>
                  </div>
                ))}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border border-danger/25 bg-card px-2.5 py-1 font-mono text-[8.5px] uppercase tracking-[0.14em] text-danger">
                  6 versions
                </div>
              </div>

              <div className="mt-4 flex items-start gap-2.5 border-t border-border pt-4">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
                <p className="text-[12px] leading-relaxed text-muted-foreground">
                  Every handoff re-enters the same information, and every team works from a slightly
                  different picture of the business.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/[0.05] px-4 py-3.5">
              <p className="text-[12.5px] font-medium text-foreground">
                The alternative is one shared record that every department works from.
              </p>
              <ArrowRight size={16} className="ml-auto shrink-0 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
