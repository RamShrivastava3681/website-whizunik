import { motion } from "framer-motion";
import TextReveal from "@/components/home/TextReveal";
import { beliefs } from "@/lib/about-content";

const BeliefsSection = () => {
  return (
    <section className="relative border-b border-border bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">What we believe</p>
            <TextReveal
              as="h2"
              text="Principles that decide how the product is built."
              className="text-balance mt-4 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground"
            />
          </div>
          <p className="max-w-md text-[13.5px] leading-relaxed text-muted-foreground lg:col-span-5">
            These are operating convictions, not marketing claims. They explain why Command is
            structured the way it is, and what we are willing to leave out.
          </p>
        </div>

        <div className="mt-12 border-t border-border">
          {beliefs.map((belief, index) => (
            <motion.article
              key={belief.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group grid gap-3 border-b border-border py-8 lg:grid-cols-12 lg:gap-10 lg:py-10"
            >
              <div className="lg:col-span-2">
                <span className="font-mono text-[11px] tracking-[0.1em] text-[#9A8B72]">
                  {belief.number}
                </span>
              </div>
              <h3 className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-foreground lg:col-span-5">
                {belief.title}
              </h3>
              <p className="max-w-xl text-[13.5px] leading-relaxed text-muted-foreground lg:col-span-5">
                {belief.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeliefsSection;
