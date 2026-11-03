import { cn } from "@/lib/utils";
import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  tone?: "base" | "surface" | "navy";
  bordered?: boolean;
  className?: string;
  containerClassName?: string;
};

const tones = {
  base: "bg-background text-foreground",
  surface: "bg-surface-container text-foreground",
  navy: "bg-secondary text-white",
};

const Section = ({
  children,
  id,
  tone = "base",
  bordered = false,
  className,
  containerClassName,
}: SectionProps) => (
  <section
    id={id}
    className={cn("py-14 md:py-20", tones[tone], bordered && "border-t border-border", className)}
  >
    <Container className={containerClassName}>{children}</Container>
  </section>
);

export default Section;
