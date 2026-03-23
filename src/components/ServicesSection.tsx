const services = [
  {
    icon: "account_balance_wallet",
    title: "Working Capital",
    description:
      "Optimizing cash flow cycles through sophisticated asset-based lending and innovative receivable financing solutions.",
  },
  {
    icon: "trending_up",
    title: "Structured Growth",
    description:
      "Custom debt architectures designed to fund acquisitions, facility expansions, and major technology deployments.",
  },
  {
    icon: "insights",
    title: "Capital Strategy",
    description:
      "Long-term roadmap development for institutional readiness and balance sheet fortification ahead of major liquidity events.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Core Capabilities
          </span>
          <h2 className="serif-headline text-4xl text-on-secondary-fixed mt-4">
            Precision Advisory Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-surface-container-lowest p-10 rounded-xl hover:bg-primary transition-all duration-500"
            >
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-primary-foreground mb-8 block">
                {service.icon}
              </span>
              <h3 className="serif-headline text-2xl text-on-secondary-fixed group-hover:text-primary-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-on-surface-variant group-hover:text-primary-foreground/80 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
