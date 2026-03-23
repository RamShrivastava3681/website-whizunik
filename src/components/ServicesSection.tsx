const services = [
  {
    icon: "account_balance_wallet",
    title: "Working Capital & Liquidity",
    points: [
      "Receivable monetisation",
      "Trade and supply chain structures",
      "Cash flow optimisation",
    ],
  },
  {
    icon: "trending_up",
    title: "Structured Growth Capital",
    points: [
      "Expansion and growth funding",
      "Hybrid and structured solutions",
      "Capital aligned to business cycles",
    ],
  },
  {
    icon: "insights",
    title: "Capital Strategy & Market Readiness",
    points: [
      "Balance sheet structuring",
      "Institutional readiness",
      "Pre-IPO planning",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            What We Do
          </span>
          <h2 className="serif-headline text-4xl text-on-secondary-fixed mt-4">
            Capital Solutions
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-3xl">
            We design capital around the business — not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-surface-container-lowest p-10 rounded-xl hover:bg-primary transition-all duration-500 h-full flex flex-col"
            >
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-primary-foreground mb-8 block">
                {service.icon}
              </span>
              <h3 className="serif-headline text-2xl text-on-secondary-fixed group-hover:text-primary-foreground mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2 text-on-surface-variant group-hover:text-primary-foreground/80 text-sm leading-relaxed">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 text-primary group-hover:text-primary-foreground">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
