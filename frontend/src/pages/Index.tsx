import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import ProductShot from "@/components/site/ProductShot";
import ButtonLink from "@/components/site/ButtonLink";
import PlatformExperience from "@/components/platform/PlatformExperience";
import usePageMeta from "@/hooks/usePageMeta";
import { clientTypes, screens } from "@/lib/content";

const Index = () => {
  usePageMeta({
    title: "Whizunik Command | Operating software for growing businesses",
    description:
      "Whizunik Command connects sales, procurement, inventory, finance and management workflows in one operating layer. Structured Capital Advisory supports businesses when capital strategy becomes the next question.",
    path: "/",
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
              Run your business from one connected operating layer.
            </h1>
            <p className="mt-5 max-w-2xl text-lede">
              Whizunik Command connects the workflows behind sales, procurement, inventory,
              finance and management so teams know what needs attention and management can act
              with context.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact?type=walkthrough" size="large" withArrow>
                Request a walkthrough
              </ButtonLink>
              <ButtonLink to="/command" variant="secondary" size="large">
                Explore Command
              </ButtonLink>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-muted-foreground">
              {[
                "An independent product",
                "Works alongside your existing systems",
                "No ERP replacement required",
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check size={14} className="text-brand-teal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 md:mt-14">
              <ProductShot screen={screens.dashboard} priority />
            </div>
          </div>
        </section>

        {/* 2 — The Platform: pinned cinematic product experience */}
        <PlatformExperience />

        {/* 3 — Structured Capital Advisory */}
        <section className="border-t border-border bg-secondary py-14 text-white md:py-20">
          <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <p className="eyebrow text-white/65">Structured Capital Advisory</p>
                <h2 className="mt-3 text-page-title text-balance text-white">
                  Capital strategy and execution, when the business needs it.
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65">
                  Advisory is a separate service. It supports businesses navigating growth,
                  liquidity and complex funding decisions — from requirement diagnosis to lender
                  and investor preparation.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink to="/strategic-advisory" variant="onDark" size="large">
                    Explore the advisory
                  </ButtonLink>
                  <ButtonLink
                    to="/contact?type=advisory"
                    variant="secondary"
                    size="large"
                    className="border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5"
                  >
                    Discuss a mandate
                  </ButtonLink>
                </div>
              </div>

              <div className="lg:col-span-6 lg:pl-6">
                <ul className="divide-y divide-white/10 border-y border-white/10">
                  {[
                    ["Capital requirement diagnosis", "What the business needs, and when."],
                    ["Working capital structure", "Where cash is committed across the cycle."],
                    ["Debt and structured finance", "Facilities that fit the operating model."],
                    ["Lender and investor preparation", "Evidence, models and diligence material."],
                  ].map(([title, body]) => (
                    <li key={title} className="py-4">
                      <p className="text-[14px] font-semibold text-white">{title}</p>
                      <p className="mt-0.5 text-[13px] text-white/55">{body}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[12.5px] leading-relaxed text-white/60">
                  Command can be adopted independently. Advisory can be added when the business
                  needs support with capital strategy or execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 — Who it is for */}
        <Section bordered>
          <SectionHeading
            eyebrow="Who it is for"
            title="Growing businesses whose work has outgrown the spreadsheet."
            intro="Command is used by teams that already have accounting software, but no single view of the work in between."
          />

          <div className="mt-9 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {clientTypes.map((client) => (
              <div key={client.name} className="border-t border-border py-5">
                <h3 className="text-card-title">{client.name}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                  {client.useCase}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* 6 — Final CTA */}
        <Section tone="surface" bordered>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-page-title text-balance">
                Bring one workflow, reporting gap or management question.
              </h2>
              <p className="mt-3 text-lede">
                We will show you how Command could fit — using your own example, not a generic
                demonstration.
              </p>
            </div>
            <ButtonLink to="/contact?type=walkthrough" size="large" withArrow className="shrink-0">
              Request a focused walkthrough
            </ButtonLink>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
