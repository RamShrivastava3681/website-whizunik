import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
  titleClassName?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
  className,
  titleClassName,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "max-w-2xl",
      align === "center" && "mx-auto text-center",
      className,
    )}
  >
    {eyebrow && (
      <p className={cn("eyebrow mb-3", onDark && "text-white/55")}>{eyebrow}</p>
    )}
    <h2 className={cn("text-page-title text-balance", onDark && "text-white", titleClassName)}>
      {title}
    </h2>
    {intro && (
      <p className={cn("text-lede mt-4", onDark && "text-white/65")}>{intro}</p>
    )}
  </div>
);

export default SectionHeading;
