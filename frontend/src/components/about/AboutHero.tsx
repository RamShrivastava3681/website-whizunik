import TextReveal from "@/components/home/TextReveal";
import { companyFacts } from "@/lib/about-content";
import officeImage from "@/assets/website-pic.jpeg";

const AboutHero = () => {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(100, 116, 139, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 116, 139, 0.1) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-12 pt-28 sm:px-6 sm:pb-14 md:px-8 md:pt-36 lg:px-12">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#9A8B72]/60" />
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#9A8B72]">
                About WhizUnik
              </p>
            </div>

            <TextReveal
              as="h1"
              immediate
              text="Building the infrastructure for better business operations."
              className="text-balance mt-6 text-[clamp(2.15rem,4.9vw,3.9rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground"
            />

            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-[15.5px]">
              WhizUnik brings technology, operational intelligence and financial understanding
              together to help businesses manage complexity and move forward with confidence.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={officeImage}
                alt="Interior of a corporate office workspace"
                fetchPriority="high"
                className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[360px]"
              />
            </div>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:mt-14 lg:grid-cols-4">
          {companyFacts.map((fact) => (
            <div key={fact.label}>
              <dd className="font-headline text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold leading-none tracking-[-0.02em] text-foreground">
                {fact.value}
              </dd>
              <dt className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                {fact.label}
              </dt>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted-foreground/80">
                {fact.detail}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AboutHero;
