import Header from "@/components/Header";
import Footer from "@/components/Footer";
import insightsHero from "@/assets/insights-hero.jpg";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Firm Updates",
    title: "Whizunik Institutional Expands Private Equity Advisory to Nordic Markets",
  },
  {
    category: "Capital Markets",
    title: "Understanding the Resilience of Sustainable Debt Instruments in 2024",
  },
  {
    category: "Perspectives",
    title: "The Long View: Why Institutional Patience is the Ultimate Arbitrage",
  },
];

const moreArticles = [
  {
    category: "Asset Management",
    title: "Navigating the Liquidity Mismatch in Private Credit",
  },
  {
    category: "Technology",
    title: "Quantum Computing: Implications for Institutional Risk Modeling",
  },
  {
    category: "Leadership",
    title: "The Modern Partner: Shifting Dynamics in B2B Advisory",
  },
];

const Insights = () => {
  return (
    <div className="bg-surface text-on-surface">
      <Header />
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-8">
        {/* Hero Title */}
        <section className="mb-20">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">
              Market Intelligence
            </span>
            <h1 className="text-6xl md:text-7xl font-medium text-on-secondary-fixed leading-none tracking-tight mb-8 font-headline">
              Insights for the<br />
              <span className="italic font-light">Modern Institution</span>.
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl">
              Curated perspectives on global markets, technological shifts, and the evolving
              landscape of institutional excellence.
            </p>
          </div>
        </section>

        {/* Bento Editorial Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          {/* Featured */}
          <div className="md:col-span-8 group cursor-pointer">
            <div className="relative overflow-hidden mb-6 aspect-[16/9] rounded-xl">
              <img
                alt="Abstract digital network visualization"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={insightsHero}
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Analysis</span>
              <span className="text-xs text-on-surface-variant">March 24, 2024</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-on-secondary-fixed leading-[1.1] group-hover:text-primary transition-colors font-headline">
              The Synthesis of Human Judgment and Machine Intelligence in Global Strategy
            </h2>
          </div>

          {/* Side List */}
          <div className="md:col-span-4 flex flex-col gap-12">
            {articles.map((a) => (
              <div key={a.title} className="group cursor-pointer">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3 block">
                  {a.category}
                </span>
                <h3 className="text-2xl text-on-secondary-fixed leading-snug group-hover:text-primary transition-colors font-headline">
                  {a.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Quarterly Review CTA */}
        <section className="md:col-span-12 mb-20">
          <div className="bg-surface-container-low p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 rounded-xl">
            <div className="md:w-1/2">
              <h2 className="text-4xl text-on-secondary-fixed mb-6 font-headline">Quarterly Intelligence Review</h2>
              <p className="text-on-surface-variant mb-8 text-lg">
                Download our comprehensive analysis of the macroeconomic forces shaping
                the upcoming fiscal cycle.
              </p>
              <button className="flex items-center gap-2 text-primary font-bold uppercase text-sm tracking-widest group">
                Access Full Report
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <div className="border-l-4 border-primary pl-8">
                <blockquote className="font-headline text-2xl text-on-secondary-fixed italic leading-snug">
                  "In an era of hyper-liquidity, the most valuable asset a firm can possess is
                  not capital, but the clarity of focus required to deploy it effectively."
                </blockquote>
                <cite className="block mt-4 text-on-surface-variant font-bold text-sm uppercase tracking-widest not-italic">
                  — Elias Thorne, Chief Strategy Officer
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* More Articles Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moreArticles.map((a) => (
              <div key={a.title} className="group cursor-pointer p-8 bg-surface-container-lowest rounded-xl hover:shadow-lg transition-all">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-4 block">
                  {a.category}
                </span>
                <h3 className="text-xl text-on-secondary-fixed leading-snug group-hover:text-primary transition-colors font-headline">
                  {a.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mb-20">
          <div className="bg-on-secondary-fixed rounded-xl p-12 md:p-16 text-center">
            <h2 className="font-headline text-3xl text-primary-foreground mb-4">The Intelligence Brief</h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8">
              Receive a monthly synthesis of our most impactful insights directly to your inbox.
              No noise, just signal.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                className="bg-primary-foreground/5 border-none focus:ring-1 focus:ring-primary-container text-primary-foreground w-full rounded-l-lg text-sm px-4 placeholder:text-primary-foreground/30"
                placeholder="Email"
                type="email"
              />
              <button className="bg-primary-container text-primary-foreground px-6 py-3 rounded-r-lg hover:bg-primary transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
