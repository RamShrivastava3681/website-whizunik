import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-background text-foreground selection:bg-primary/20 min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 60, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[5%] left-[-5%] w-[35vw] h-[35vw] bg-primary/5 rounded-full blur-[100px]" 
        />
      </div>

      <main className="relative pt-48 pb-32">
        <section className="max-w-[1440px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-8 shadow-sm">
                Get in Touch
              </span>
              <h1 className="font-headline text-7xl md:text-8xl text-foreground font-bold tracking-tighter leading-none mb-10">
                Let's Build Your <br/>
                <span className="italic text-primary font-light">Capital</span> Future.
              </h1>
              <p className="text-on-surface-variant text-xl leading-relaxed mb-16 max-w-lg font-medium border-l border-white/10 pl-10">
                Whether you're exploring funding options or ready to restructure your capital
                stack, our team is here to guide you every step of the way.
              </p>

              <div className="space-y-10">
                {[
                  { icon: Mail, title: "Email", value: "sankalp@whizunik.com", href: "mailto:sankalp@whizunik.com" },
                  { icon: Phone, title: "Phone", value: "+91-7045941942", href: "tel:+917045941942" },
                  { icon: MapPin, title: "Address", value: "Max Towers, 16th Floor, Sector 16 B, Noida, 201301", href: "#" },
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                      <item.icon size={24} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground/60 text-xs uppercase tracking-widest mb-2">{item.title}</h4>
                      <a 
                        href={item.href} 
                        className="text-xl font-headline text-foreground hover:text-primary transition-colors font-bold flex items-center gap-3"
                      >
                        {item.value}
                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] blur-3xl -z-10"></div>
              <form 
                onSubmit={handleSubmit} 
                className="bg-surface-container-low/40 backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl space-y-8"
              >
                <div className="mb-10">
                  <h3 className="font-headline text-4xl text-foreground font-bold mb-4 tracking-tight">Schedule a <span className="text-primary italic font-light">Consultation</span></h3>
                  <p className="text-on-surface-variant font-medium text-lg leading-relaxed">
                    Access our protocol of institutional excellence. We respond within a single market cycle (24 hours).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest ml-4">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="e.g. Julian Thorne"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest ml-4">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="professional@firm.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest ml-4">Institutional Presence</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Company or Organization Name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest ml-4">Strategic Inquiry</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-6 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Specify the parameters of your capital requirements..."
                  />
                </div>

                <div className="pt-6">
                  <Magnetic>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-6 rounded-full font-bold text-sm uppercase tracking-[0.3em] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-4 shadow-xl shadow-primary/20 group"
                    >
                      <span>Initiate Protocol</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </Magnetic>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
