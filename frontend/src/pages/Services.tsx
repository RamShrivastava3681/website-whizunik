import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import ButtonLink from "@/components/site/ButtonLink";
import usePageMeta from "@/hooks/usePageMeta";
import { advisoryAreas } from "@/lib/content";

const approach = [
  {
    step: "01",
    title: "Initial discussion",
    body: "Understand the business, the transaction and the decision in front of management.",
  },
  {
    step: "02",
    title: "Financial review",
    body: "Review the operating and financial position, including existing obligations and covenants.",
  },
  {
    step: "03",
    title: "Structuring",
    body: "Evaluate appropriate capital structures against the operating cycle and risk profile.",
  },
  {
    step: "04",
    title: "Execution",
    body: "Support lender or investor conversations through to drawdown where the mandate continues.",
  },
];

const Services = () => {
  usePageMeta({
    title: "Structured Capital Advisory | Whizunik",
    description:
      "Structured Capital Advisory for businesses navigating growth, liquidity and complex funding decisions. Independent of Whizunik Command.",
    path: "/strategic-advisory",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main" className="pt-16">
        <section className="border-b border-border pb-12 pt-12 md:pb-16 md:pt-16">
          <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-6 lg:px-8">
            <p className="eyebrow">Structured Capital Advisory</p>
            <h1 className="mt-4 max-w-3xl text-display text-balance">
              Capital strategy and execution for growth, liquidity and complex funding decisions.
            </h1>
            <p className="mt-5 max-w-2xl text-lede">
              Advisory is a separate service. It supports businesses navigating growth, liquidity
              and complex funding decisions — with the operating evidence that makes those
              conversations concrete.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact?type=advisory" size="large" withArrow>
                Discuss a mandate
              </ButtonLink>
              <ButtonLink to="/command" variant="secondary" size="large">
                See Whizunik Command
              </ButtonLink>
            </div>
          </div>
        </section>

        <Section>
          <SectionHeading
            eyebrow="Focus areas"
            title="Six areas of work."
            intro="Engagements begin with the commercial reality — the order, the counterparties and the terms — rather than a standard product."
          />

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
            {advisoryAreas.map((area, index) => (
              <div key={area.title} className="border-t border-border py-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-brand-teal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-card-title">{area.title}</h3>
                </div>
                <p className="mt-2 pl-7 text-[13.5px] leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="surface" bordered>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="How an engagement runs"
                title="A defined sequence, with the reasoning made explicit."
              />
            </div>

            <div className="lg:col-span-7">
              <ol className="divide-y divide-border border-y border-border">
                {approach.map((item) => (
                  <li key={item.step} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                    <span className="font-mono text-[11px] text-brand-teal sm:col-span-1">
                      {item.step}
                    </span>
                    <div className="sm:col-span-11">
                      <h3 className="text-[14px] font-semibold">{item.title}</h3>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        <Section bordered>
          <div className="max-w-3xl">
            <p className="eyebrow">Independence</p>
            <h2 className="mt-3 text-page-title text-balance">
              Advisory is independent of Whizunik Command.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Command may improve the operating visibility that supports an advisory engagement,
              but purchasing Command does not require an advisory mandate. Equally, an advisory
              engagement can run without Command.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-[14px] leading-relaxed text-muted-foreground">
              If the next question is a capital decision rather than an operating one, start with
              a conversation.
            </p>
            <ButtonLink to="/contact?type=advisory" size="large" withArrow>
              Discuss a mandate
            </ButtonLink>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
