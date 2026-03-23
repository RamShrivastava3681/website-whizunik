const ProblemSection = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="serif-headline text-4xl text-on-secondary-fixed mb-8 leading-tight">
              Growth demands more than just cash—it demands{" "}
              <span className="italic">capital intelligence.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Middle-market firms often find themselves in a "capital gap"—too large for
              small-business lending, yet underserved by global investment banks.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">warning</span>
                <div>
                  <h4 className="font-bold text-on-secondary-fixed mb-1">Stagnant Liquidity</h4>
                  <p className="text-on-surface-variant text-sm">
                    Traditional lenders lack the appetite for rapid scaling structures.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">account_balance</span>
                <div>
                  <h4 className="font-bold text-on-secondary-fixed mb-1">Opaque Markets</h4>
                  <p className="text-on-surface-variant text-sm">
                    Access to private debt and institutional credit remains siloed behind legacy networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
