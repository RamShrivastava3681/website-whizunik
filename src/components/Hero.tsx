import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 lg:col-span-7">
          <span className="inline-block text-primary font-bold tracking-widest uppercase text-xs mb-6">
            Hero
          </span>
          <h1 className="serif-headline text-5xl md:text-7xl text-on-secondary-fixed font-medium leading-[1.1] mb-8">
            Structured Capital Advisory for{" "}
            <span className="text-primary italic">Growth-Stage</span> Businesses
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
            We work with founders and management teams to structure working capital,
            growth capital, and long-term capital strategies — aligned to how their
            businesses actually operate and scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
              Let's Talk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="hidden md:block md:col-span-4 lg:col-span-5 relative">
          <div className="aspect-square bg-surface-container-highest rounded-[2rem] flex items-center justify-center p-12 relative overflow-hidden">
            <img
              alt="Institutional Building Architecture"
              className="w-full h-full object-cover rounded-[2rem] grayscale mix-blend-multiply opacity-40"
              src={heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-xl border border-surface-container-high max-w-[200px]">
            <p className="text-3xl font-bold text-primary mb-1">$500M+</p>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
              Capital Advised in 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
