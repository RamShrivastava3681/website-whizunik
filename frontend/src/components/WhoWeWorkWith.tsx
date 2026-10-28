import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Factory, Boxes, TrendingUp, ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

export const clientProfiles = [
  {
    title: "Exporters & International Traders",
    tag: "Global Trade",
    icon: Globe,
    desc: "Track the journey from customer order to dispatch, invoice, collection and bank realisation. Command helps management identify delayed shipments, documentation gaps, overdue receivables and cash tied up in trade.",
  },
  {
    title: "Manufacturers & Fabricators",
    tag: "Industrial",
    icon: Factory,
    desc: "Connect customer orders, material requirements, procurement, production, quality release, finished stock and dispatch. Command shows shortages, production delays, rejected quantities and orders at risk.",
  },
  {
    title: "Trading & Distribution Companies",
    tag: "Supply Chain",
    icon: Boxes,
    desc: "Maintain one view of suppliers, inventory, customer orders, dispatches, returns and debtor ageing across locations and channels. Command helps teams act faster while management sees stock, margin and cash exposure.",
  },
  {
    title: "Promoter-Led Growth Businesses",
    tag: "Growth Scale",
    icon: TrendingUp,
    desc: "Replace disconnected spreadsheets with a practical operating layer for finance, operations, procurement, inventory and management reporting. Start with the workflow creating the most friction and expand as the business grows.",
  },
];

interface WhoWeWorkWithProps {
  asSection?: boolean;
  className?: string;
  showCta?: boolean;
}

export const WhoWeWorkWith = ({ 
  asSection = false, 
  className = "",
  showCta = false 
}: WhoWeWorkWithProps) => {
  const content = (
    <div className={`p-8 sm:p-12 md:p-16 rounded-3xl bg-neutral-50/80 border border-black/10 shadow-xs ${className}`}>
      <div className="max-w-3xl mb-10 sm:mb-12">
        <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-2 font-mono">
          Client Focus
        </span>
        <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
          Who Whizunik Works With
        </h2>
        <p className="text-black/75 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
          We work with growing businesses where operational complexity affects visibility, accountability and cash control. Whizunik Command connects the workflows management needs to see, while Structured Capital Advisory supports the business when capital strategy becomes the next question.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {clientProfiles.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              whileHover={{ y: -3 }}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-black/10 hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-primary border border-black/5 font-mono">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-black/70 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {showCta && (
        <div className="text-center max-w-3xl mx-auto pt-14 border-t border-black/10 mt-14 sm:mt-16">
          <h3 className="serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
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
      )}
    </div>
  );

  if (asSection) {
    return (
      <section className="py-20 md:py-28 bg-white border-t border-black/5" id="who-we-work-with">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          {content}
        </div>
      </section>
    );
  }

  return content;
};

export default WhoWeWorkWith;
