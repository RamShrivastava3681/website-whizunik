import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import TextReveal from "./TextReveal";
import BrowserFrame from "./BrowserFrame";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { productSections } from "@/lib/command-content";

const ProductShowcase = () => {
  const scope = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (prefersReduced) return;
    const element = scope.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-product-article]").forEach((article) => {
        const trigger = { trigger: article, start: "top 74%", once: true };

        gsap.from(article.querySelector("[data-product-copy]"), {
          y: 28,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: trigger,
        });

        gsap.from(article.querySelectorAll("[data-product-bullet]"), {
          y: 14,
          opacity: 0,
          duration: 0.5,
          stagger: 0.07,
          delay: 0.12,
          scrollTrigger: trigger,
        });

        gsap.from(article.querySelector("[data-product-visual]"), {
          y: 48,
          scale: 0.945,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: trigger,
        });
      });
    }, element);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section id="products" className="relative bg-background">
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-20 sm:px-6 sm:pt-24 md:px-8 lg:px-12 lg:pt-28">
        <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">The platform</p>
            <TextReveal
              as="h2"
              text="Every moving part. One intelligent system."
              className="mt-4 max-w-2xl text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-foreground"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
              Six connected workspaces, one transaction record. Each module is a working surface for
              a specific team — not a dashboard pretending to be an operating system.
            </p>
          </div>
        </div>
      </div>

      <div ref={scope}>
        {productSections.map((product, index) => {
          const imageFirst = index % 2 === 0;
          return (
            <article
              key={product.id}
              data-product-article
              className={`border-b border-border ${
                product.surface === "card" ? "bg-surface-container" : "bg-background"
              }`}
            >
              <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 py-16 sm:px-6 sm:py-20 md:px-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-14 lg:px-12 lg:py-24">
                <div
                  className={`relative lg:col-span-7 ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-8 left-0 select-none font-mono text-[52px] font-medium leading-none text-foreground/[0.06] sm:text-[64px]"
                  >
                    {product.number}
                  </span>
                  <div data-product-visual className="relative">
                    <BrowserFrame
                      tone={product.surface === "card" ? "light" : "light"}
                      src={product.image}
                      alt={product.imageAlt}
                      label={product.eyebrow}
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
                  data-product-copy
                >
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-primary">
                    Product {product.number} — {product.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-[1.14] tracking-[-0.025em] text-foreground">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {product.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        data-product-bullet
                        className="flex items-start gap-2.5 text-[13.5px] text-foreground/80"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary">
                          <Check size={10} strokeWidth={3} />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact?type=walkthrough"
                    className="group mt-7 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    See this workflow in a walkthrough
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProductShowcase;
