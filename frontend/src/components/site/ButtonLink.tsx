import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "onDark" | "text";
  size?: "default" | "large";
  className?: string;
  withArrow?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200";

const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs",
  secondary:
    "border border-border bg-card text-foreground hover:border-foreground/30 hover:bg-surface-container",
  onDark:
    "bg-white text-secondary hover:bg-white/90",
  text: "text-primary hover:text-primary/80 px-0",
};

const sizes: Record<NonNullable<ButtonLinkProps["size"]>, string> = {
  default: "h-10 px-4 text-[13.5px]",
  large: "h-11 px-5 text-[14px]",
};

const isExternal = (to: string) =>
  to.startsWith("http") || to.startsWith("mailto:") || to.startsWith("tel:");

const ButtonLink = ({
  to,
  children,
  variant = "primary",
  size = "default",
  className,
  withArrow = false,
}: ButtonLinkProps) => {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {withArrow && <ArrowUpRight size={15} className="shrink-0" aria-hidden="true" />}
    </>
  );

  if (isExternal(to)) {
    return (
      <a
        href={to}
        className={classes}
        target={to.startsWith("http") ? "_blank" : undefined}
        rel={to.startsWith("http") ? "noreferrer noopener" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {content}
    </Link>
  );
};

export default ButtonLink;
