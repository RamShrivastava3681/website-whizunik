const steps = [
  { num: "01", title: "Diagnostic", desc: "Deep-dive assessment of financials and growth trajectories." },
  { num: "02", title: "Structuring", desc: "Designing the optimal mix of credit, debt, and equity instruments." },
  { num: "03", title: "Origination", desc: "Leveraging our network of 150+ institutional capital providers." },
  { num: "04", title: "Execution", desc: "Rigorous due diligence management through to capital funding." },
];

const LifecycleSection = () => {
  return (
    <section className="py-32 bg-surface-container text-on-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 text-center">
          <h2 className="serif-headline text-4xl mb-6">The Whizunik Lifecycle</h2>
          <p className="text-on-surface/60 max-w-2xl mx-auto">
            From diagnostic to deployment, we follow a rigorous institutional framework to ensure capital certainty.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-on-surface/20"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step) => (
              <div key={step.num} className="relative z-10">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-[2rem] flex items-center justify-center mb-8">
                  <span className="font-bold">{step.num}</span>
                </div>
                <h4 className="font-bold text-lg mb-3">{step.title}</h4>
                <p className="text-on-surface/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifecycleSection;
