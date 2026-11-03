import { useLayoutEffect, useRef } from "react";
import TextReveal from "@/components/home/TextReveal";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const nodes = [
  { label: "Sales", x: 120, y: 58 },
  { label: "Procurement", x: 120, y: 150 },
  { label: "Production", x: 120, y: 242 },
  { label: "Inventory", x: 400, y: 58 },
  { label: "Warehouse", x: 400, y: 150 },
  { label: "Finance", x: 400, y: 242 },
];

const VisionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-vision-path]", {
        scaleX: 0,
        transformOrigin: "left center",
        opacity: 0,
        duration: 0.9,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
      });

      gsap.from("[data-vision-node]", {
        opacity: 0,
        y: 10,
        duration: 0.6,
        stagger: 0.06,
        delay: 0.25,
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
      });
    }, section);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#071A36] py-20 text-white sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148, 190, 255, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 190, 255, 0.045) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-hero-drift-slow pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[min(880px,94vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1D4ED8]/20 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C5FD]">Our vision</p>

        <TextReveal
          as="h2"
          text="Our vision is to make business operations more connected, transparent and intelligent."
          className="text-balance mt-6 max-w-4xl text-[clamp(1.9rem,4.4vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-white"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-7">
            <svg
              viewBox="0 0 520 300"
              role="img"
              aria-label="Departments connected to one shared business record"
              className="w-full max-w-[560px]"
            >
              {nodes.map((node) => (
                <line
                  key={`line-${node.label}`}
                  data-vision-path
                  x1="260"
                  y1="150"
                  x2={node.x}
                  y2={node.y}
                  stroke="rgba(147, 197, 253, 0.28)"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />
              ))}

              <circle cx="260" cy="150" r="42" fill="rgba(37, 99, 235, 0.14)" />
              <circle
                cx="260"
                cy="150"
                r="42"
                fill="none"
                stroke="rgba(147, 197, 253, 0.5)"
                strokeWidth="1"
              />
              <text
                x="260"
                y="147"
                textAnchor="middle"
                fill="rgba(255, 255, 255, 0.92)"
                fontSize="11"
                letterSpacing="0.5"
              >
                One
              </text>
              <text
                x="260"
                y="161"
                textAnchor="middle"
                fill="rgba(255, 255, 255, 0.92)"
                fontSize="11"
                letterSpacing="0.5"
              >
                record
              </text>

              {nodes.map((node) => (
                <g key={node.label} data-vision-node>
                  <circle cx={node.x} cy={node.y} r="3.5" fill="#93C5FD" />
                  <text
                    x={node.x < 260 ? node.x - 10 : node.x + 10}
                    y={node.y + 3.5}
                    textAnchor={node.x < 260 ? "end" : "start"}
                    fill="rgba(255, 255, 255, 0.58)"
                    fontSize="10.5"
                    letterSpacing="0.4"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[14.5px] leading-relaxed text-white/55">
              Connection is not a dashboard placed on top of five systems. It is the point where a
              customer order, a purchase commitment, a stock movement, an approval and a payment are
              recognised as one chain of events.
            </p>
            <div className="mt-8 flex items-baseline gap-8 border-t border-white/10 pt-6">
              <div>
                <p className="font-headline text-[1.6rem] font-semibold leading-none text-white">
                  07
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
                  Connected functions
                </p>
              </div>
              <div>
                <p className="font-headline text-[1.6rem] font-semibold leading-none text-white">
                  01
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
                  Source of truth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
