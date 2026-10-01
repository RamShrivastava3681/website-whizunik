import Header from "@/components/Header";
import HeroStory from "@/components/HeroStory";
import ProblemSection from "@/components/ProblemSection";
import HowCommandWorks from "@/components/HowCommandWorks";
import OperationalControl from "@/components/OperationalControl";
import ManagementCenter from "@/components/ManagementCenter";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";

import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <Preloader />
      <ScrollProgress />
      <Header />
      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <HeroStory />

        {/* Problem Section: Disconnected Reality */}
        <ProblemSection />

        {/* How Command Works + My Queue + Department Views */}
        <HowCommandWorks />

        {/* Operational Control: Expected vs Actual + Workflows */}
        <OperationalControl />

        {/* Management Command Center + Accounting Coexistence + Implementation + Final CTA */}
        <ManagementCenter />
      </main>
      <Footer />

      {/* Background Decorative Blur */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[-15%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[160px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[-10%] w-[55vw] h-[55vw] bg-[#2f63ff]/5 rounded-full blur-[140px]" 
        />
      </div>
    </div>
  );
};

export default Index;
