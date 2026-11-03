import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import ButtonLink from "@/components/site/ButtonLink";
import usePageMeta from "@/hooks/usePageMeta";
import { teamCapabilities } from "@/lib/content";

const About = () => {
  usePageMeta({
    title: "About Whizunik",
    description:
      "Why Whizunik exists, the operating problems it solves, and how Whizunik Command differs from Structured Capital Advisory.",
    path: "/about",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main" className="pt-16">
        <section className="border-b border-border pb-12 pt-12 md:pb-16 md:pt-16">
          <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-6 lg:px-8">
            <p className="eyebrow">About</p>
            <h1 className="mt-4 max-w-3xl text-display text-balance">
              A serious operating product, supported by people who understand capital and
              execution.
            </h1>
            <p className="mt-5 max-w-2xl text-lede">
              Whizunik builds software for the work between the systems a growing business already
              runs — and advises on capital when the operating position is clear enough to act on.
            </p>
          </div>
        </section>

        <Section>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="text-section-title">Why Whizunik exists</h2>
            </div>
            <div className="space-y-4 text-[14.5px] leading-relaxed text-muted-foreground lg:col-span-8">
              <p>
                Growing businesses rarely fail for lack of effort. They lose time and margin at the
                handover — where an order becomes a purchase, a purchase becomes stock, and stock
                becomes an invoice. Each team keeps its own version of the same transaction.
              </p>
              <p>
                Management then reconstructs the position after the fact, usually in a spreadsheet,
                often too late to act on it. The information needed to decide already exists; it is
                simply not connected.
              </p>
              <p>
                Command exists to close that gap. It gives the operating team one place to do the
                work, and gives management one view of what is moving, what needs attention and
                what happens next.
              </p>
            </div>
          </div>
        </Section>

        <Section tone="surface" bordered>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="text-section-title">Why technology and capital expertise belong together</h2>
            </div>
            <div className="space-y-4 text-[14.5px] leading-relaxed text-muted-foreground lg:col-span-8">
              <p>
                Capital conversations are decided on evidence: orders, stock, receivables, cash
                conversion and the reliability of the numbers behind them. A lender or investor
                assesses the business through that information before assessing its ambition.
              </p>
              <p>
                The same evidence is what an operating system should produce as a matter of course.
                That is why the product and the advisory practice sit together — not because one
                depends on the other, but because they answer the same underlying question from
                different sides.
              </p>
            </div>
          </div>
        </Section>

        <Section bordered>
          <SectionHeading
            eyebrow="Two distinct offerings"
            title="A product, and a service. Used independently."
          />

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-meta">Product</p>
              <h3 className="mt-2 text-section-title">Whizunik Command</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                An independent operating layer that connects sales, procurement, inventory,
                finance, warehouse and management workflows. Adopted on its own, alongside your
                existing accounting or ERP systems.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-meta">Service</p>
              <h3 className="mt-2 text-section-title">Structured Capital Advisory</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                A separate engagement for businesses navigating growth, liquidity and complex
                funding decisions. Purchasing Command does not require an advisory mandate.
              </p>
            </div>
          </div>
        </Section>

        <Section tone="surface" bordered>
          <SectionHeading
            eyebrow="The team"
            title="Capability, described honestly."
            intro="Detailed introductions are shared during the engagement conversation. Work is organised around four capabilities."
          />

          <div className="mt-9 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {teamCapabilities.map((capability) => (
              <div key={capability.title} className="border-t border-border py-5">
                <h3 className="text-card-title">{capability.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
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

export default About;
