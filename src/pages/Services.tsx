import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    icon: "architecture",
    title: "Institutional Strategy",
    desc: "Comprehensive roadmap development for large-scale digital transformations, focusing on sustainable growth and architectural integrity.",
    tags: ["Systems Audit", "Risk Management", "Scale Planning"],
    variant: "light" as const,
  },
  {
    num: "02",
    icon: "biotech",
    title: "Deep Research",
    desc: "Translating complex data sets into actionable market intelligence and proprietary insights.",
    tags: [],
    variant: "dark" as const,
  },
  {
    num: "03",
    icon: "auto_awesome",
    title: "Editorial Design",
    desc: "Interfaces that prioritize cognitive ease and professional authority over visual clutter.",
    tags: [],
    variant: "light" as const,
  },
  {
    num: "04",
    icon: "terminal",
    title: "Precision Engineering",
    desc: "Bulletproof technical foundations built for high-concurrency environments and data security compliance.",
    tags: [],
    variant: "light" as const,
  },
];

const competencies = [
  {
    num: "01",
    title: "Technical Architecture & Governance",
    desc: "We design digital ecosystems that survive the test of time. Our governance frameworks ensure that as your technical debt decreases, your operational velocity increases.",
    offerings: [
      { name: "Microservices Orchestration", type: "Standard" },
      { name: "Legacy Integration", type: "Custom" },
      { name: "Compliance Frameworks", type: "SOC2/HIPAA" },
    ],
  },
  {
    num: "02",
    title: "Data-Driven Market Intelligence",
    desc: "Our research methodology combines qualitative ethnographic studies with quantitative predictive modeling. We don't just report on what is happening; we forecast what is next.",
    offerings: [
      { name: "Real-time Analytics", type: "" },
      { name: "User Sentiment", type: "" },
      { name: "Predictive Flow", type: "" },
    ],
  },
  {
    num: "03",
    title: "Specialized Ventures & R&D",
    desc: "Innovation without governance is merely noise. We provide the structure that allows creative ambition to scale safely.",
    offerings: [],
  },
];

const Services = () => {
  return (
    <div className="bg-surface text-on-surface">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 mb-24 lg:mb-32">
          <div className="max-w-3xl">
            <h1 className="font-headline text-6xl md:text-7xl text-on-secondary-fixed leading-tight tracking-tighter mb-8">
              Our <span className="italic text-primary">Strategic</span> Core.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              We bridge the gap between academic rigor and commercial velocity. Our services
              are engineered for institutional scale, delivered with boutique precision.
            </p>
          </div>
        </section>

        {/* Bento Grid Services */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((service) => (
              <div
                key={service.num}
                className={`${
                  service.variant === "dark"
                    ? "md:col-span-4 bg-on-secondary-fixed text-primary-foreground p-10 rounded-xl relative overflow-hidden"
                    : "md:col-span-8 bg-surface-container-lowest p-10 rounded-xl shadow-lg relative overflow-hidden group"
                }`}
              >
                <div className="absolute top-0 right-0 p-8">
                  <span className="text-6xl font-headline italic opacity-10 text-on-secondary-fixed">
                    {service.num}
                  </span>
                </div>
                <span className={`material-symbols-outlined text-4xl ${service.variant === "dark" ? "text-secondary-fixed" : "text-primary"} mb-6 block`}>
                  {service.icon}
                </span>
                <h3 className={`font-headline text-3xl ${service.variant === "dark" ? "" : "text-on-secondary-fixed"} mb-4`}>
                  {service.title}
                </h3>
                <p className={`${service.variant === "dark" ? "text-primary-foreground/70" : "text-on-surface-variant"} max-w-lg mb-8`}>
                  {service.desc}
                </p>
                {service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-surface-container-low text-on-surface-variant text-sm font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {service.variant === "dark" && (
                  <button className="mt-8 flex items-center text-secondary-fixed font-bold uppercase text-xs tracking-wider hover:gap-3 gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities badges */}
        <section className="max-w-7xl mx-auto px-8 mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {["Cloud Native", "API First", "Zero Trust"].map((badge) => (
              <span key={badge} className="flex items-center text-sm font-medium gap-2">
                <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                {badge}
              </span>
            ))}
          </div>
        </section>

        {/* Competencies Breakdown */}
        <section className="max-w-4xl mx-auto px-8 mb-32">
          <div className="mb-16">
            <span className="font-bold text-primary uppercase tracking-[0.2em] text-xs">
              The Detail Layer
            </span>
            <h2 className="font-headline text-4xl text-on-secondary-fixed mt-4">
              Core Competencies Breakdown
            </h2>
          </div>

          <div className="space-y-2">
            {competencies.map((comp) => (
              <details
                key={comp.num}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-lg transition-all duration-500"
              >
                <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-6">
                    <span className="font-headline text-2xl text-on-secondary-fixed opacity-40">
                      {comp.num}
                    </span>
                    <h4 className="font-headline text-2xl text-on-secondary-fixed">
                      {comp.title}
                    </h4>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="px-8 pb-8">
                  <p className="text-on-surface-variant leading-relaxed mb-6 max-w-2xl">
                    {comp.desc}
                  </p>
                  {comp.offerings.length > 0 && (
                    <div className="space-y-3">
                      <h5 className="font-bold text-sm uppercase tracking-wider text-on-secondary-fixed">
                        In-Depth Offerings
                      </h5>
                      {comp.offerings.map((o) => (
                        <div key={o.name} className="flex justify-between items-center py-2 border-b border-outline-variant/30">
                          <span className="text-on-surface-variant">{o.name}</span>
                          {o.type && (
                            <span className="text-xs font-bold text-primary uppercase tracking-wider">
                              {o.type}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="max-w-7xl mx-auto px-8 mb-32 flex justify-end">
          <div className="max-w-3xl border-l-4 border-primary pl-12 py-4">
            <blockquote className="font-headline text-4xl md:text-5xl text-on-secondary-fixed leading-tight italic">
              "Innovation without governance is merely noise. We provide the structure that
              allows creative ambition to scale safely."
            </blockquote>
            <cite className="block mt-6 font-bold text-sm tracking-widest text-on-surface-variant uppercase not-italic">
              — Dr. Elias Whiz, Chief Strategist
            </cite>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="bg-surface-container-low rounded-xl p-16 md:p-24 text-center overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="font-headline text-5xl text-on-secondary-fixed mb-8">
                Ready to Elevate Your Institution?
              </h2>
              <p className="text-on-surface-variant max-w-xl mx-auto mb-12 text-lg">
                Connect with our advisors to discuss how our services can align with your
                long-term organizational goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-primary-container text-primary-foreground px-10 py-4 rounded-lg font-bold hover:bg-primary transition-all shadow-lg flex items-center justify-center gap-2">
                  Request Consultation
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </button>
                <button className="border border-outline-variant text-on-secondary-fixed px-10 py-4 rounded-lg font-bold hover:bg-surface-container-lowest transition-all">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
