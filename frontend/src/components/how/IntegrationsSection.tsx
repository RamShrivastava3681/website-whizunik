import { CreditCard, FileSpreadsheet, ShoppingBag, ShoppingCart, Store } from "lucide-react";
import BrowserFrame from "@/components/home/BrowserFrame";
import TextReveal from "@/components/home/TextReveal";
import { hubScreens } from "@/lib/command-content";
import { integrations } from "@/lib/command-content";

const icons: Record<string, typeof Store> = {
  amazon: ShoppingBag,
  flipkart: ShoppingCart,
  myntra: Store,
  shopify: FileSpreadsheet,
  tally: CreditCard,
};

const IntegrationsSection = () => {
  return (
    <section className="relative border-b border-border bg-surface-container py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Integrations</p>
            <TextReveal
              as="h2"
              text="External systems feed the same operating record."
              className="text-balance mt-4 text-[clamp(1.9rem,3.9vw,3rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-foreground"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              Marketplace orders and accounting entries enter Command without a second round of data
              entry, so channel activity and statutory books stay aligned with operations.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <BrowserFrame
              tone="light"
              src={hubScreens.marketplace}
              alt="Marketplace and accounting integration surface in WhizUnik Command"
              label="Marketplace & systems hub"
            />
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-2.5 sm:grid-cols-2">
              {integrations.map((integration) => {
                const Icon = icons[integration.id] ?? Store;
                return (
                  <div
                    key={integration.id}
                    className="rounded-xl border border-border bg-card p-3.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon size={15} />
                      </span>
                      <p className="text-[12.5px] font-semibold text-foreground">
                        {integration.name}
                      </p>
                    </div>
                    <p className="mt-2 text-[11.5px] leading-relaxed text-muted-foreground">
                      {integration.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 rounded-xl border border-border bg-card px-4 py-3.5">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                Scope note
              </p>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted-foreground">
                Connector availability and sync behaviour are confirmed during implementation scoping.
                Command does not claim an integration that has not been configured for your
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
