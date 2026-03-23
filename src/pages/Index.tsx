import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import LifecycleSection from "@/components/LifecycleSection";
import QuoteSection from "@/components/QuoteSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-surface text-on-surface">
      <Header />
      <main className="pt-20">
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <LifecycleSection />
        <QuoteSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
