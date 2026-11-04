import { Fragment, useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  /** Animate on mount instead of on scroll. */
  immediate?: boolean;
  delay?: number;
  stagger?: number;
  start?: string;
};

const TextReveal = ({
  text,
  as = "h2",
  className = "",
  immediate = false,
  delay = 0,
  stagger = 0.045,
  start = "top 84%",
}: TextRevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();
  const Tag = as as React.ElementType;

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(element.querySelectorAll("[data-word]"), {
        yPercent: 115,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger,
        delay: immediate ? delay : 0,
        scrollTrigger: immediate
          ? undefined
          : { trigger: element, start, once: true },
      });
    }, element);

    return () => ctx.revert();
  }, [text, immediate, delay, stagger, start, prefersReduced]);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden align-bottom">
            <span data-word className="inline-block will-change-transform" aria-hidden="true">
              {word}
            </span>
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
};

export default TextReveal;
