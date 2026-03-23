import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-architecture.jpg";
import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <div className="bg-surface text-on-surface">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero: Narrative */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <span className="inline-block text-primary font-bold tracking-widest text-xs uppercase mb-6">
                Our Narrative
              </span>
              <h1 className="serif-headline text-5xl md:text-8xl text-on-secondary-fixed font-medium leading-[1.1]">
                Architects of <span className="italic">Intellectual</span> Capital.
              </h1>
            </div>
            <div className="md:col-span-4 pb-4">
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Whizunik was founded on a singular premise: that true institutional
                excellence is born from the intersection of rigorous data and creative intuition.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-32">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden rounded-xl">
              <img
                alt="Institutional Architecture"
                className="object-cover w-full h-full opacity-90 transition-transform duration-700 hover:scale-105"
                src={aboutImage}
              />
            </div>
            <div className="space-y-12">
              <div className="pl-12 border-l-4 border-primary">
                <h2 className="text-4xl font-headline text-on-secondary-fixed mb-6">Our Mission</h2>
                <p className="text-on-surface-variant text-xl leading-relaxed italic font-headline">
                  "To elevate institutional decision-making through a curated approach to
                  complex systems, fostering an environment where clarity becomes the
                  ultimate competitive advantage."
                </p>
              </div>
              <div className="space-y-6 text-on-surface-variant leading-relaxed max-w-md">
                <p>
                  We do not merely provide services; we cultivate partnerships built on the
                  foundations of deep research and ethical stewardship.
                </p>
                <p>
                  In an era of noise, we prioritize the signal. Our methodology is refined,
                  reductive, and relentlessly focused on the outcomes that define legacies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-surface-container-low py-32 mb-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">
                  Leadership
                </span>
                <h2 className="text-5xl font-headline text-on-secondary-fixed mb-8">Sankalp Kumar</h2>
                <p className="text-on-secondary-fixed font-semibold text-lg mb-6">Founder of Whizunik</p>
                <div className="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>
                    With over two decades of experience in institutional strategy, Sankalp
                    brings a perspective that bridges classical academic rigor with contemporary
                    market agility.
                  </p>
                  <p>
                    Under his stewardship, Whizunik has evolved into a boutique powerhouse known
                    for navigating the most intricate challenges of the modern financial landscape.
                  </p>
                </div>
                <div className="mt-12 flex space-x-6">
                  <a className="text-primary hover:text-on-secondary-fixed transition-colors flex items-center gap-2 group" href="#">
                    <span className="text-sm font-bold uppercase tracking-wider">LinkedIn</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/5 -translate-x-6 translate-y-6 rounded-xl"></div>
                  <div className="relative aspect-square md:aspect-video bg-surface-container-highest rounded-xl overflow-hidden">
                    <img
                      alt="Sankalp Kumar Portrait"
                      className="object-contain w-full h-full"
                      src="/Confident%20professional%20in%20office%20setting.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-headline text-on-secondary-fixed mb-4 italic">Our Philosophy</h2>
            <p className="text-on-surface-variant">
              The core principles that govern our engagement and ensure the longevity of our impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
            {[
              {
                num: "01.",
                title: "Intellectual Rigor",
                desc: "We reject superficial solutions. Every strategy is forged through exhaustive research and peer-reviewed methodologies.",
              },
              {
                num: "02.",
                title: "Radical Integrity",
                desc: "Our advice is uncompromised. We maintain absolute transparency, prioritizing the client's long-term health over short-term gains.",
              },
              {
                num: "03.",
                title: "Measured Precision",
                desc: "In strategy, as in architecture, every millimeter matters. We execute with a level of detail that leaves nothing to chance.",
              },
            ].map((p) => (
              <div key={p.num} className="bg-surface p-12 group hover:bg-surface-container-lowest transition-all duration-500">
                <span className="text-4xl font-headline text-primary/20 group-hover:opacity-100 transition-opacity mb-8 block">
                  {p.num}
                </span>
                <h3 className="text-2xl font-headline text-on-secondary-fixed mb-4">{p.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Signature Quote */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="flex justify-end">
            <div className="max-w-3xl border-l-4 border-primary pl-16 py-8">
              <blockquote className="text-4xl md:text-5xl font-headline text-on-secondary-fixed leading-tight italic serif-tight">
                "The most sophisticated solutions are often those that have the courage to
                remain simple. We don't complicate; we clarify."
              </blockquote>
              <cite className="block mt-8 text-on-surface-variant font-bold uppercase tracking-widest text-sm not-italic">
                — Institutional Manifesto, 2024
              </cite>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
