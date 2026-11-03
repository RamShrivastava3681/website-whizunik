import { motion } from "framer-motion";
import TextReveal from "@/components/home/TextReveal";
import { operationalChain } from "@/lib/about-content";

const StorySection = () => {
  return (
    <section className="relative border-b border-border bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">Our story</p>
            <TextReveal
              as="h2"
              text="Why WhizUnik exists."
              className="text-balance mt-4 text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground"
            />
            <p className="mt-6 border-l border-primary/30 pl-5 text-[16px] leading-[1.55] text-foreground/80 sm:text-[17px]">
              Businesses rarely struggle because one department is failing. They struggle because
              the departments cannot see each other.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4 text-[14.5px] leading-relaxed text-muted-foreground">
              <p>
                WhizUnik was built around an observation drawn from more than 25 years inside
                structured finance: financial performance and operational execution cannot be
                separated. When operations stall, capital dries up. When systems disconnect,
                visibility disappears.
              </p>
              <p>
                In most growing businesses, sales, procurement, inventory, manufacturing and finance
                each keep their own version of the same transaction. Orders are confirmed in one
                system, purchased in another, received on paper, dispatched from a warehouse
                register and reconciled months later in accounts. Every handover becomes a re-entry,
                and every re-entry becomes a discrepancy.
              </p>
              <p>
                WhizUnik exists to bring those activities into one connected operating environment —
                a shared transaction record that operations, finance and management can all act on.
                Because the same operational information supports capital decisions, the business
                also advises on the financing requirements that follow.
              </p>
            </div>

            <div className="mt-9">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                What a single handover actually moves
              </p>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {operationalChain.map((item, index) => (
                  <motion.li
                    key={item.cause}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="grid gap-1 py-3.5 sm:grid-cols-[190px_1fr] sm:items-baseline sm:gap-6"
                  >
                    <span className="flex items-baseline gap-3 text-[13px] font-semibold text-foreground">
                      <span className="font-mono text-[9.5px] font-normal text-[#9A8B72]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.cause}
                    </span>
                    <span className="pl-7 text-[12.5px] leading-relaxed text-muted-foreground sm:pl-0">
                      {item.effect}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
