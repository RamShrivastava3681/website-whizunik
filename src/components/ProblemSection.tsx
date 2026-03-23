const ProblemSection = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="serif-headline text-4xl text-on-secondary-fixed mb-8 leading-tight">
              The Problem
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Most businesses don’t have a capital problem. They have a capital structure problem.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">warning</span>
                <div>
                  <h4 className="font-bold text-on-secondary-fixed mb-1">Banks require collateral.</h4>
                  <p className="text-on-surface-variant text-sm">
                    Capital access often depends on asset-heavy structures that many growth businesses don’t fit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">account_balance</span>
                <div>
                  <h4 className="font-bold text-on-secondary-fixed mb-1">Private equity requires scale.</h4>
                  <p className="text-on-surface-variant text-sm">
                    Between debt and equity, strong businesses are left in a gap where structures don’t match operations.
                  </p>
                </div>
              </div>

              <p className="text-on-surface-variant text-lg leading-relaxed pt-2">
                Between the two, many strong businesses are left trying to fit into structures that don’t reflect how they actually operate. We work in that gap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
