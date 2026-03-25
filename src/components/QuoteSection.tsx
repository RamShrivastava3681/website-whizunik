import { motion } from "framer-motion";
import { Building2, Truck, TrendingUp } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="py-48 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="lg:col-span-6"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-12 shadow-sm">Target Audience</span>
            <h2 className="serif-headline text-6xl md:text-8xl text-black mb-12 font-bold tracking-tighter leading-none">
              Who We <br/>
              <span className="blue-gradient-text italic font-light">Work With.</span>
            </h2>
            <div className="h-px w-32 bg-primary/40"></div>
          </motion.div>
          
          <div className="lg:col-span-6 space-y-8">
            {[
              { icon: <Building2 className="w-6 h-6" />, text: "₹50–500 Cr businesses" },
              { icon: <Truck className="w-6 h-6" />, text: "Exporters, manufacturers, trading companies" },
              { icon: <TrendingUp className="w-6 h-6" />, text: "Promoter-led growth businesses" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 group p-8 rounded-[2.5rem] bg-neutral-50 hover:bg-white border border-black/5 hover:border-primary/20 hover:shadow-[0_20px_40px_-10px_rgba(var(--primary),0.1)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary border border-black/5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <span className="text-2xl font-headline text-black/80 font-bold group-hover:text-black transition-colors">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
