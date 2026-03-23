import Header from "@/components/Header";
import Footer from "@/components/Footer";

const capitalLayers = [
  {
    num: "01",
    title: "Working Capital & Liquidity",
    intro:
      "We help businesses unlock liquidity from their existing operations by structuring working capital solutions aligned to their cash conversion cycles.",
    detail:
      "This typically involves receivable monetisation, supply chain financing, and cross-border structures designed around how the business actually operates — rather than forcing it into standard banking formats.",
    points: [
      "Receivable monetisation",
      "Supply chain and trade finance structures",
      "Cash flow cycle optimisation",
      "Cross-border financing frameworks",
    ],
  },
  {
    num: "02",
    title: "Structured Growth Capital",
    intro:
      "We work with businesses looking to expand but constrained by traditional debt structures, designing capital solutions that balance growth with flexibility.",
    detail:
      "This includes structured debt, hybrid capital, and performance-linked structures that allow businesses to scale without being restricted by rigid repayment or collateral frameworks.",
    points: [
      "Growth and expansion funding",
      "Structured debt and hybrid capital",
      "Performance-linked structures",
      "Capital aligned to operating cycles",
    ],
  },
  {
    num: "03",
    title: "Capital Strategy & Market Readiness",
    intro:
      "For businesses approaching the next stage of growth, we work on longer-term capital planning and balance sheet structuring.",
    detail:
      "The focus is on preparing companies for institutional capital — whether through private investors, structured credit, or eventual capital market access — by ensuring that both financials and structure are aligned for scale.",
    points: [
      "Balance sheet structuring",
      "Capital allocation strategy",
      "Investor readiness",
      "Pre-IPO positioning",
    ],
  },
];

const engagementItems = [
  "Advisory-led approach focused on structuring",
  "Execution support through a curated network of capital partners",
  "Combination of fixed advisory and success-based engagement",
];

const Services = () => {
  return (
    <div className="bg-surface text-on-surface relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <Header />
      <main className="pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-16">
            <h1 className="font-headline text-5xl md:text-7xl text-on-secondary-fixed leading-tight tracking-tighter mb-6">
              Capital <span className="italic text-primary">Solutions</span>
            </h1>
            <p className="text-lg md:text-2xl text-on-surface-variant leading-relaxed max-w-4xl">
              We work across three layers of capital, depending on where the business is and what it needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 mb-20">
            {capitalLayers.map((layer) => (
              <section
                key={layer.num}
                className="group relative h-full bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-8 md:p-9 shadow-lg overflow-hidden hover:bg-primary transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none group-hover:from-primary/20" />
                <div className="relative z-10 h-full flex flex-col">
                  <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 group-hover:text-primary-foreground">
                    {layer.num}
                  </span>
                  <h2 className="font-headline text-3xl text-on-secondary-fixed mb-5 leading-tight group-hover:text-primary-foreground">
                    {layer.title}
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed mb-4 group-hover:text-primary-foreground/90">{layer.intro}</p>
                  <p className="text-on-surface-variant leading-relaxed mb-6 group-hover:text-primary-foreground/90">{layer.detail}</p>
                  <ul className="space-y-2 text-on-surface-variant mt-auto pt-2 group-hover:text-primary-foreground/90">
                    {layer.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover:bg-primary-foreground" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>

          <section className="bg-on-secondary-fixed text-primary-foreground rounded-2xl p-10 md:p-14 mb-8 shadow-lg overflow-hidden relative">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-primary/30 blur-2xl" />
            <div className="relative z-10">
              <span className="inline-block text-primary-foreground/70 font-bold tracking-[0.2em] text-xs uppercase mb-4">
                Delivery Model
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-primary-foreground mb-7">How Engagement Works</h2>
            <ul className="space-y-3 text-on-surface-variant">
                {engagementItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary-foreground/90 text-lg leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-foreground shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
