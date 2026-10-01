import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, 
  Package, 
  Warehouse, 
  FileText, 
  CreditCard, 
  ArrowRight, 
  Sparkles,
  ChevronRight
} from "lucide-react";

const timelineSteps = [
  {
    step: "01",
    role: "Sales",
    icon: ShoppingCart,
    status: "Knows what has been ordered",
    connection: "Customer orders and commercial terms flow directly to Procurement and Warehouse queues without manual re-entry.",
  },
  {
    step: "02",
    role: "Procurement",
    icon: Package,
    status: "Knows what needs to be purchased",
    connection: "Purchase Orders link directly to confirmed commercial demand, preventing stockouts and runaway commitments.",
  },
  {
    step: "03",
    role: "Warehouse",
    icon: Warehouse,
    status: "Knows what has physically arrived",
    connection: "Dock inspection verifies physical receipts and issues authentic GRN — updating real-time inventory instantly.",
  },
  {
    step: "04",
    role: "Finance",
    icon: FileText,
    status: "Knows what has been invoiced",
    connection: "Commercial invoices are released only when verified delivery milestones and Checker approvals are completed.",
  },
  {
    step: "05",
    role: "Treasury",
    icon: CreditCard,
    status: "Knows what has actually been paid",
    connection: "Realized bank remittances are reconciled directly, giving management real-time visibility into actual available cash.",
  },
];

const ProblemSection = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

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

          {/* Right Column: Department Timeline */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 blur-2xl pointer-events-none rounded-3xl" />

            {/* Timeline track container */}
            <div className="relative pl-7 sm:pl-9 space-y-3.5 z-10">
              {/* Continuous vertical timeline connector track line */}
              <div className="absolute left-[13px] sm:left-[17px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-primary/10" />

              {timelineSteps.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeStep === index;

                return (
                  <div key={item.role} className="relative">
                    {/* Glowing Timeline Node Button */}
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      aria-label={`Select ${item.role} stage`}
                      className={`absolute -left-[27px] sm:-left-[35px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 z-20 cursor-pointer ${
                        isActive
                          ? "bg-primary text-white ring-4 ring-primary/25 shadow-[0_0_20px_rgba(47,99,255,0.55)] scale-110"
                          : "bg-white text-black/60 border-2 border-black/15 hover:border-primary/50 hover:text-primary hover:scale-105 shadow-2xs"
                      }`}
                    >
                      {item.step}
                    </button>

                    {/* Timeline Step Card */}
                    <div
                      onClick={() => setActiveStep(index)}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                        isActive
                          ? "bg-white border-primary shadow-[0_12px_32px_rgba(47,99,255,0.14)] ring-1 ring-primary/30 -translate-y-0.5"
                          : "bg-white/85 border-black/10 shadow-2xs hover:bg-white hover:border-primary/30 hover:shadow-xs"
                      }`}
                    >
                      {/* Radiant glow light in active state */}
                      {isActive && (
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-bl from-primary/15 via-primary/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                      )}

                      <div className="flex items-start gap-3.5 sm:gap-4 relative z-10">
                        {/* Department Icon */}
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isActive
                              ? "bg-primary text-white shadow-[0_0_16px_rgba(47,99,255,0.35)] scale-105"
                              : "bg-neutral-100 text-black/60 group-hover:text-primary group-hover:bg-primary/10"
                          }`}
                        >
                          <Icon size={19} />
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Title */}
                          <div className="mb-1">
                            <h4 className={`font-bold text-sm sm:text-base tracking-tight transition-colors ${
                              isActive ? "text-primary" : "text-black group-hover:text-primary"
                            }`}>
                              {item.role}
                            </h4>
                          </div>

                          {/* Primary Status (Official Word Doc text) */}
                          <p className="text-black/85 font-semibold text-xs sm:text-sm leading-snug">
                            {item.status}
                          </p>

                          {/* Animated Radiant Handoff Details */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="overflow-hidden"
                              >
                                <div className="pt-2.5 border-t border-primary/20 flex items-start gap-2 bg-primary/[0.03] p-2.5 rounded-xl border border-primary/10">
                                  <ArrowRight size={13} className="text-primary mt-0.5 shrink-0" />
                                  <p className="text-[11px] sm:text-xs text-black/80 font-medium leading-relaxed">
                                    <strong className="text-primary font-bold">WhizUnik Connection: </strong>
                                    {item.connection}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
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
