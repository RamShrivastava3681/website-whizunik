import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import LifecycleSection from "@/components/LifecycleSection";
import QuoteSection from "@/components/QuoteSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <Preloader />
      <Header />
      <main className="relative z-10 w-full">
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <LifecycleSection />
        <QuoteSection />
        <CTASection />
      </main>
      <Footer />

      {/* Background Decorative Blur (Fixed) */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[30%] left-[-20%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default Index;
