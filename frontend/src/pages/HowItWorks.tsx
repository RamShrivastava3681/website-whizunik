import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import ProductShot from "@/components/site/ProductShot";
import ButtonLink from "@/components/site/ButtonLink";
import WorkflowFlow from "@/components/site/WorkflowFlow";
import usePageMeta from "@/hooks/usePageMeta";
import { howSteps, screens } from "@/lib/content";

const inlineShots: Record<string, (typeof screens)[keyof typeof screens]> = {
  "03": screens.procurement,
  "08": screens.warehouse,
};

const HowItWorks = () => {
  usePageMeta({
    title: "How It Works | Whizunik Command",
    description:
      "Follow one connected business flow through Whizunik Command — from customer order and material check to dispatch, collection and the management view.",
    path: "/how-it-works",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main" className="pt-16">
        <section className="border-b border-border pb-12 pt-12 md:pb-16 md:pt-16">
          <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-6 lg:px-8">
            <p className="eyebrow">How it works</p>
            <h1 className="mt-4 max-w-3xl text-display text-balance">
              One connected flow, from customer order to payment follow-up.
            </h1>
            <p className="mt-5 max-w-2xl text-lede">
              Command follows the work rather than the org chart. Each stage keeps its owner, its
              status and its financial consequence, so management sees the business as it moves.
            </p>

            <div className="mt-10 border-y border-border py-8">
              <WorkflowFlow />
            </div>
          </div>
        </section>

        <Section>
          <SectionHeading
            eyebrow="The ten steps"
            title="What happens, who owns it, and what becomes visible."
          />

          <div className="mt-10">
            {howSteps.map((step) => (
              <div key={step.number}>
                <article className="grid grid-cols-1 gap-6 border-t border-border py-8 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-4">
                    <span className="font-mono text-[11px] text-brand-teal">{step.number}</span>
                    <h2 className="mt-2 text-section-title">{step.title}</h2>
                    <p className="mt-2 text-[13px] text-muted-foreground">
                      <span className="font-semibold text-foreground">Owner:</span> {step.owner}
                    </p>
                  </div>

                  <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 md:col-span-8">
                    <div>
                      <dt className="text-meta">What happens</dt>
                      <dd className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                        {step.happens}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-meta">Who owns it</dt>
                      <dd className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                        {step.owner}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-meta">What Command makes visible</dt>
                      <dd className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                        {step.visible}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-meta">What management can see</dt>
                      <dd className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                        {step.management}
                      </dd>
                    </div>
                  </dl>
                </article>

                {inlineShots[step.number] && (
                  <div className="border-t border-border py-8">
                    <ProductShot screen={inlineShots[step.number]} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section tone="surface" bordered>
          <SectionHeading
            eyebrow="The rest of the workspace"
            title="The same record, seen from each team's side."
            intro="Sales, procurement, warehouse, channels and demand planning each work from their own view of the same transaction."
          />

          <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ProductShot
              screen={screens.sales}
              sizes="(min-width: 1160px) 540px, 100vw"
            />
            <ProductShot
              screen={screens.marketplace}
              sizes="(min-width: 1160px) 540px, 100vw"
            />
            <div className="lg:col-span-2">
              <ProductShot screen={screens.forecast} />
            </div>
          </div>
        </Section>

        <Section bordered>
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

export default HowItWorks;
