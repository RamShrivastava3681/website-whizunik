import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import ProductShot from "@/components/site/ProductShot";
import ButtonLink from "@/components/site/ButtonLink";
import WorkflowFlow from "@/components/site/WorkflowFlow";
import usePageMeta from "@/hooks/usePageMeta";
import { capabilities, clientTypes, primaryScreens, screens } from "@/lib/content";

const Command = () => {
  usePageMeta({
    title: "Whizunik Command | Turn operational activity into management control",
    description:
      "Whizunik Command connects sales, procurement, inventory, finance, warehouse and management workflows in one practical operating layer.",
    path: "/command",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main" className="pt-16">
        {/* 1 — Hero */}
        <section className="border-b border-border pb-14 pt-12 md:pb-20 md:pt-16">
          <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-6 lg:px-8">
            <p className="eyebrow">Whizunik Command</p>
            <h1 className="mt-4 max-w-3xl text-display text-balance">
              Turn operational activity into management control.
            </h1>
            <p className="mt-5 max-w-2xl text-lede">
              Whizunik Command connects sales, procurement, inventory, finance, warehouse and
              management workflows in one practical operating layer.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact?type=walkthrough" size="large" withArrow>
                Request a walkthrough
              </ButtonLink>
              <ButtonLink to="#product-views" variant="secondary" size="large">
                See how it works
              </ButtonLink>
            </div>

            <div className="mt-12 md:mt-14">
              <ProductShot screen={screens.dashboard} priority />
            </div>
          </div>
        </section>

        {/* 2 — The product in one sentence */}
        <Section>
          <h2 className="max-w-3xl text-page-title text-balance">
            One operating layer between the systems your teams use and the decisions management
            needs to make.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <div key={capability.name} className="border-t border-border pt-5">
                <span className="font-mono text-[11px] text-brand-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-card-title">{capability.name}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* 3 — Product views */}
        <Section id="product-views" tone="surface" bordered>
          <SectionHeading
            eyebrow="Product views"
            title="See the workspace management actually uses."
            intro="Three views of the same operating layer. Every number is traceable to the transaction that produced it."
          />

          <div className="mt-10 space-y-12 md:space-y-16">
            {primaryScreens.map((screen, index) => (
              <ProductShot
                key={screen.id}
                screen={screen}
                priority={index === 0}
                sizes="(min-width: 1160px) 1100px, 100vw"
              />
            ))}
          </div>
        </Section>

        {/* 4 — Connected workflow */}
        <Section bordered>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Connected workflow"
              title="One sequence, from order to collection."
              intro="Each stage hands over to the next with its owner, status and financial consequence attached."
            />
            <ButtonLink to="/how-it-works" variant="text" className="shrink-0 font-semibold">
              See the full flow
              <ArrowRight size={14} aria-hidden="true" />
            </ButtonLink>
          </div>

          <div className="mt-10">
            <WorkflowFlow />
          </div>
        </Section>

        {/* 5 — Who it is for */}
        <Section tone="surface" bordered>
          <SectionHeading
            eyebrow="Who it is for"
            title="Built for four kinds of growing business."
          />

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {clientTypes.map((client) => (
              <div key={client.name} className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-card-title">{client.name}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                  {client.problem}
                </p>
                <p className="mt-3 border-t border-border pt-3 text-[13.5px] leading-relaxed text-foreground">
                  {client.useCase}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* 6 — Product independence and CTA */}
        <section className="bg-secondary py-14 text-white md:py-20">
          <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p className="eyebrow text-white/65">Independent product</p>
                <h2 className="mt-3 text-page-title text-balance text-white">
                  Request a focused walkthrough.
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65">
                  Bring one workflow, reporting gap or management question. We will show you how
                  Command could fit.
                </p>
                <p className="mt-6 max-w-xl border-t border-white/10 pt-6 text-[13px] leading-relaxed text-white/60">
                  Command can be adopted independently. Structured Capital Advisory can be added
                  when the business needs support with capital strategy or execution.
                </p>
              </div>

              <div className="flex items-start lg:col-span-5 lg:justify-end">
                <ButtonLink to="/contact?type=walkthrough" variant="onDark" size="large" withArrow>
                  Request a focused walkthrough
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Command;
