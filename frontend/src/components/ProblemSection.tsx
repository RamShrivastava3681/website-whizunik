import { motion } from "framer-motion";
import { ShoppingCart, Package, Warehouse, FileText, CreditCard, ArrowRight } from "lucide-react";

const departmentData = [
  {
    role: "Sales",
    icon: ShoppingCart,
    status: "Knows what has been ordered",
    detail: "Customer orders and expectations logged in CRM / emails.",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    role: "Procurement",
    icon: Package,
    status: "Knows what needs to be purchased",
    detail: "Supplier purchase orders tracked in independent spreadsheets.",
    color: "from-indigo-500/10 to-indigo-600/5",
  },
  {
    role: "Warehouse",
    icon: Warehouse,
    status: "Knows what has physically arrived",
    detail: "Physical stock receipts managed on local tally registers.",
    color: "from-cyan-500/10 to-cyan-600/5",
  },
  {
    role: "Finance",
    icon: FileText,
    status: "Knows what has been invoiced",
    detail: "Invoices generated separately in accounting software.",
    color: "from-emerald-500/10 to-emerald-600/5",
  },
  {
    role: "Treasury",
    icon: CreditCard,
    status: "Knows what has actually been paid",
    detail: "Bank portals checked daily to confirm actual realized cash.",
    color: "from-violet-500/10 to-violet-600/5",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-white" id="problem">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,hsl(var(--primary)/0.12)_0%,rgba(255,255,255,0.92)_42%,rgba(255,255,255,1)_100%)] pointer-events-none" />
      <div className="absolute top-[-8%] right-[-8%] w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-[95px] pointer-events-none" />
      <div className="absolute bottom-[-24%] left-[-12%] w-[24rem] h-[24rem] rounded-full bg-primary/10 blur-[85px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Context */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="text-primary font-body text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold mb-4">
              The Disconnected Reality
            </p>

            <h2 className="serif-headline text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6">
              Your business is connected.{" "}
              <span className="italic font-light text-primary block sm:inline">
                Your systems often aren't.
              </span>
            </h2>

            <p className="text-black/75 text-base md:text-lg leading-relaxed mb-6 font-normal">
              As businesses grow, departments begin working across different spreadsheets, software, and communication channels.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/[0.08] to-primary/[0.02] border border-primary/20 mb-8">
              <p className="text-black/85 text-sm md:text-base leading-relaxed font-medium mb-3">
                Management is often left bringing these pieces together manually.
              </p>
              <div className="flex items-center gap-3 text-primary font-bold text-sm md:text-base">
                <span>WhizUnik Command connects them into one controlled operating flow.</span>
                <ArrowRight size={18} className="shrink-0" />
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs md:text-sm text-black/50">
              <span className="w-2 h-2 rounded-full bg-primary/60" />
              <span>Real-time handoffs eliminate blind spots between departments.</span>
            </div>
          </motion.div>

          {/* Right Column: Department Disconnect Cards */}
          <div className="relative space-y-3 sm:space-y-3.5">
            <div className="absolute -inset-4 bg-primary/5 blur-2xl pointer-events-none rounded-3xl" />
            
            {departmentData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="relative group p-4 sm:p-5 rounded-2xl border border-black/10 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-black font-bold text-sm sm:text-base tracking-tight">
                          {item.role}
                        </h4>
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary/80 bg-primary/5 px-2.5 py-0.5 rounded-full">
                          Siloed
                        </span>
                      </div>
                      <p className="text-black/80 font-medium text-xs sm:text-sm leading-snug">
                        {item.status}
                      </p>
                      <p className="text-black/45 text-[11px] sm:text-xs mt-1 leading-normal">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
