const CTASection = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8 mb-32">
      <div className="bg-primary-container rounded-3xl p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-foreground/5 rounded-[2rem]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-foreground/5 rounded-[2rem]"></div>

        <h2 className="serif-headline text-4xl md:text-5xl text-primary-foreground mb-8 relative z-10">
          Why Whizunik
        </h2>
        <p className="text-primary-foreground text-2xl md:text-3xl font-headline italic max-w-3xl mb-6 relative z-10">
          Most advisors arrange capital. We structure it.
        </p>
        <p className="text-primary-foreground/85 text-lg max-w-4xl relative z-10 leading-relaxed">
          Our approach is grounded in understanding how businesses actually operate —
          designing capital solutions that are aligned with cash flows, growth plans,
          and long-term objectives.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
