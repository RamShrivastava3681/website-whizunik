import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "default" | "onDark";
  className?: string;
  asLink?: boolean;
};

const Logo = ({ tone = "default", className, asLink = true }: LogoProps) => {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={tone === "onDark" ? "/brand/whizunik-mark-white.png" : "/brand/whizunik-mark.png"}
        alt=""
        aria-hidden="true"
        width={28}
        height={28}
        className="h-7 w-7 object-contain"
      />
      <span
        className={cn(
          "font-headline text-[19px] font-extrabold tracking-[-0.03em]",
          tone === "onDark" ? "text-white" : "text-foreground",
        )}
      >
        Whizunik
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link to="/" aria-label="Whizunik home" className="rounded-md transition-opacity hover:opacity-80">
      {content}
    </Link>
  );
};

export default Logo;
