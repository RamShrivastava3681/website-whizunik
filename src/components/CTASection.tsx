const CTASection = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8 mb-32">
      <div className="bg-primary-container rounded-3xl p-16 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-foreground/5 rounded-[2rem]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-foreground/5 rounded-[2rem]"></div>

        <h2 className="serif-headline text-4xl md:text-5xl text-primary-foreground mb-8 relative z-10">
          Ready to scale your capital stack?
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mb-12 relative z-10">
          Join 40+ growth-stage businesses who have restructured their financial future
          with Whizunik.
        </p>
        <button className="bg-primary-foreground text-primary px-10 py-5 rounded-xl text-lg font-extrabold hover:bg-surface-container transition-all shadow-xl relative z-10">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
};

export default CTASection;
