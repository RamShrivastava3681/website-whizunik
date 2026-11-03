import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/site/Container";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

const LegalPage = ({ title, intro, updated, sections }: LegalPageProps) => (
  <div className="min-h-screen bg-background">
    <Header />

    <main id="main" className="pt-16">
      <div className="border-b border-border pb-10 pt-12 md:pt-16">
        <Container>
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 max-w-3xl text-page-title text-balance">{title}</h1>
          <p className="mt-4 max-w-2xl text-lede">{intro}</p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            Last updated {updated}
          </p>
        </Container>
      </div>

      <Container className="py-12 md:py-16">
        <div className="max-w-2xl space-y-9">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-section-title">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>

    <Footer />
  </div>
);

export default LegalPage;
