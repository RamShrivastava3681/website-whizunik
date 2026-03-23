const QuoteSection = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="serif-headline text-4xl text-on-secondary-fixed mb-8">Who We Work With</h2>
        <ul className="space-y-4 text-on-surface-variant text-lg leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
            <span>₹50–500 Cr businesses</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
            <span>Exporters, manufacturers, trading companies</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
            <span>Promoter-led growth businesses</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default QuoteSection;
