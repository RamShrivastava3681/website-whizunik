const QuoteSection = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <span className="material-symbols-outlined text-5xl text-primary/30 mb-8 block">format_quote</span>
        <h2 className="serif-headline text-3xl md:text-4xl text-on-secondary-fixed leading-snug mb-8">
          "Capital is a commodity. Intelligence is the differentiator. We don't just find
          money; we engineer financial foundations that withstand the friction of growth."
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-12 h-px bg-primary mb-6"></div>
          <p className="font-bold text-on-secondary-fixed tracking-widest uppercase text-sm">
            Our Philosophy
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
