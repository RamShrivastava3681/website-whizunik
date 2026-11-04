import { AlertTriangle, ArrowUpRight, Boxes, CheckCircle2, ClipboardList, Wallet } from "lucide-react";
import BrowserFrame from "@/components/home/BrowserFrame";
import TextReveal from "@/components/home/TextReveal";
import { hubScreens } from "@/lib/command-content";
import { managementSignals } from "@/lib/how-content";

const icons = [ArrowUpRight, ClipboardList, Wallet, Boxes, AlertTriangle];
const tones = {
  info: "status-pill-info",
  warning: "status-pill-warning",
  success: "status-pill-success",
  danger: "status-pill-danger",
} as const;

const ManagementVisibility = () => {
  return (
    <section className="relative border-b border-border bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Management visibility</p>
            <TextReveal
              as="h2"
              text="Every department working. Management always informed."
              className="text-balance mt-4 text-[clamp(1.9rem,3.9vw,3rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-foreground"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              The same transaction record that runs the work also gives management the operating
              picture — without a separate reporting cycle or a status meeting.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <BrowserFrame
              tone="light"
              src={hubScreens.dashboard}
              alt="Executive dashboard showing sales, cash, inventory and pending approvals"
              label="Executive dashboard"
            />
            <p className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted-foreground">
              Illustrative workspace — sample figures for interface demonstration only
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <p className="text-[12.5px] font-semibold text-foreground">What management sees</p>
              <ul className="mt-4 space-y-3.5">
                {managementSignals.map((signal, index) => {
                  const Icon = icons[index] ?? CheckCircle2;
                  return (
                    <li key={signal.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-surface-container text-primary">
                        <Icon size={13} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[12.5px] font-semibold text-foreground">{signal.label}</p>
                        <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted-foreground">
                          {signal.value}
                        </p>
                      </div>
                      <span className={`status-pill ml-auto shrink-0 self-start ${tones[signal.tone]}`}>
                        Live
                      </span>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-4 border-t border-border pt-4 text-[11.5px] leading-relaxed text-muted-foreground">
                Visibility follows permission. Each manager sees the transactions, approvals and
                financial detail their role is accountable for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementVisibility;
