import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Package, Warehouse, FileText, CreditCard, ArrowRight, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";

const departmentData = [
  {
    role: "Sales",
    icon: ShoppingCart,
    status: "Knows what has been ordered",
    siloedDetail: "Customer orders and expectations logged in CRM / emails.",
    connectedDetail: "Customer orders release directly to Procurement & Warehouse queues without re-entry.",
  },
  {
    role: "Procurement",
    icon: Package,
    status: "Knows what needs to be purchased",
    siloedDetail: "Supplier purchase orders tracked in independent spreadsheets.",
    connectedDetail: "Purchase Orders link directly to confirmed commercial demand with full traceability.",
  },
  {
    role: "Warehouse",
    icon: Warehouse,
    status: "Knows what has physically arrived",
    siloedDetail: "Physical stock receipts managed on local tally registers.",
    connectedDetail: "Dock inspection generates authentic GRN — instantly updating available inventory.",
  },
  {
    role: "Finance",
    icon: FileText,
    status: "Knows what has been invoiced",
    siloedDetail: "Invoices generated separately in accounting software.",
    connectedDetail: "Invoices unlock smoothly as verified milestones and Checker approvals are completed.",
  },
  {
    role: "Treasury",
    icon: CreditCard,
    status: "Knows what has actually been paid",
    siloedDetail: "Bank portals checked daily to confirm actual realized cash.",
    connectedDetail: "Treasury records realized bank remittances, updating actual available cash instantly.",
  },
];

const ProblemSection = () => {
  const [viewMode, setViewMode] = useState<"siloed" | "connected">("connected");

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

            <div className="flex items-center gap-3 text-xs md:text-sm text-black/60 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-primary/70 animate-pulse" />
              <span>Real-time handoffs eliminate blind spots between departments.</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Department Disconnect vs Connected Cards */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 blur-2xl pointer-events-none rounded-3xl" />

            {/* Interactive Mode Toggle */}
            <div className="flex items-center justify-between mb-4 bg-neutral-100 p-1.5 rounded-2xl border border-black/5 relative z-10 shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode("siloed")}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  viewMode === "siloed"
                    ? "bg-white text-black shadow-xs border border-black/5"
                    : "text-black/55 hover:text-black"
                }`}
              >
                <AlertCircle size={13} className={viewMode === "siloed" ? "text-amber-600" : ""} />
                <span>Without WhizUnik (Siloed)</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("connected")}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  viewMode === "connected"
                    ? "bg-primary text-white shadow-xs"
                    : "text-black/55 hover:text-black"
                }`}
              >
                <Sparkles size={13} />
                <span>With WhizUnik Command</span>
              </button>
            </div>

            {/* Cards Stack */}
            <div className="space-y-3 relative z-10">
              {departmentData.map((item, index) => {
                const Icon = item.icon;
                const isConnected = viewMode === "connected";

                return (
                  <motion.div
                    key={item.role}
                    layout
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ x: 4 }}
                    className={`relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                      isConnected
                        ? "bg-white border-primary/25 shadow-sm hover:shadow-md hover:border-primary/50"
                        : "bg-white/80 border-black/10 shadow-2xs hover:border-black/20"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isConnected
                            ? "bg-primary/10 text-primary"
                            : "bg-black/5 text-black/60"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-black font-bold text-sm sm:text-base tracking-tight">
                            {item.role}
                          </h4>
                          <span
                            className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-colors flex items-center gap-1 ${
                              isConnected
                                ? "bg-primary/10 text-primary"
                                : "bg-black/5 text-black/60"
                            }`}
                          >
                            {isConnected ? (
                              <>
                                <CheckCircle2 size={11} />
                                <span>Connected Flow</span>
                              </>
                            ) : (
                              <span>Siloed</span>
                            )}
                          </span>
                        </div>
                        <p className="text-black/85 font-semibold text-xs sm:text-sm leading-snug">
                          {item.status}
                        </p>
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={isConnected ? "conn" : "silo"}
                            initial={{ opacity: 0, y: 3 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -3 }}
                            transition={{ duration: 0.2 }}
                            className={`text-[11px] sm:text-xs mt-1 leading-relaxed ${
                              isConnected ? "text-primary/80 font-medium" : "text-black/50"
                            }`}
                          >
                            {isConnected ? item.connectedDetail : item.siloedDetail}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
