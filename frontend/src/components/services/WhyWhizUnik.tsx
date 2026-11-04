import BrowserFrame from "@/components/home/BrowserFrame";
import TextReveal from "@/components/home/TextReveal";
import { hubScreens } from "@/lib/command-content";
import { credibilityPoints } from "@/lib/advisory-content";

const WhyWhizUnik = () => {
  return (
    <section className="relative border-b border-border bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="lg:col-span-6">
            <p className="eyebrow">Why WhizUnik</p>
            <TextReveal
              as="h2"
              text="Operating knowledge, applied to capital conversations."
              className="text-balance mt-4 text-[clamp(1.9rem,3.9vw,3rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-foreground"
            />
            <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
              Capital advisory is stronger when it is grounded in how the business actually trades.
              WhizUnik works with operating companies and builds the Command platform, so the advisory
              conversation can start from orders, inventory, receivables and commitments rather than
              from a spreadsheet summary.
            </p>

            <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {credibilityPoints.map((point, index) => (
                <div key={point.title}>
                  <dt className="flex items-baseline gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    <span className="text-[#9A8B72]">{String(index + 1).padStart(2, "0")}</span>
                    {point.title}
                  </dt>
                  <dd className="mt-2 text-[12.5px] leading-relaxed text-foreground/75">
                    {point.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <BrowserFrame
              tone="light"
              src={hubScreens.dashboard}
              alt="Management view of sales, cash, inventory and pending approvals"
              label="Operating view — management dashboard"
            />
            <div className="mt-4 rounded-xl border border-border bg-surface-container px-4 py-3.5">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                Why it matters
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
                Better operating information supports better capital decisions. Verified orders, stock
                positions and receivables ageing make the requirement easier to explain — and easier to
                assess.
              </p>
            </div>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
              Illustrative workspace — sample figures for demonstration only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWhizUnik;
