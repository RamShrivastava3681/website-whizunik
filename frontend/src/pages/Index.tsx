import Header from "@/components/Header";
import HeroStory from "@/components/HeroStory";
import ProblemSection from "@/components/ProblemSection";
import CommandProductScreens from "@/components/CommandProductScreens";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";
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

        {/* Whizunik Command Core Product Sections:
            1. Command Overview (One connected operating flow)
            2. Management Command Centre (See the business as it moves)
            3. Departmental Workspaces (Every team sees the work it owns)
            4. My Queue & Approvals (Everyone knows what to do next)
            5. Connected Transaction View (One transaction. One connected flow)
            6. Factory & Manufacturing Connected Workflow (Interactive 9-stage pipeline)
            7. Marketplace & Accounting Integrations (Amazon, Flipkart, Tally, Zoho, Banks)
        */}
        <CommandProductScreens />

        {/* Problem Section: Disconnected Reality */}
        <ProblemSection />


        {/* Final Walkthrough CTA */}
        <section className="py-20 md:py-28 bg-white border-t border-black/5">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">

            {/* Final Walkthrough CTA */}
            <div className="text-center max-w-3xl mx-auto pt-4">
              <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
                Bring your operations into <span className="text-primary font-light italic">one connected flow.</span>
              </h3>
              <p className="text-black/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto font-medium">
                Connect your teams, transactions, and operational visibility — from the first order to the final movement of goods and cash.
              </p>
              <Magnetic>
                <Link
                  to="/contact?type=walkthrough"
                  className="relative overflow-hidden inline-flex items-center gap-3 px-9 py-4 sm:py-5 rounded-full bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] hover:shadow-[0_16px_40px_rgba(47,99,255,0.45)] hover:brightness-105 active:scale-[0.98] transition-all duration-300 shadow-xl shadow-primary/25 group"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <span className="relative z-10">Request a Walkthrough</span>
                  <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </Magnetic>
            </div>

          </div>
        </section>
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
