import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

type ThemeToggleProps = {
  className?: string;
  /** "onDark" keeps the control legible over navy hero sections. */
  tone?: "default" | "onDark";
};

const ThemeToggle = ({ className = "", tone = "default" }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      title={isDark ? "Light theme" : "Dark theme"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        tone === "onDark"
          ? "border-white/15 bg-white/[0.06] text-white/70 hover:border-white/30 hover:text-white focus-visible:ring-white/60 focus-visible:ring-offset-[#071A36]"
          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground focus-visible:ring-ring focus-visible:ring-offset-background"
      } ${className}`}
    >
      {isDark ? <Sun size={16} strokeWidth={1.9} /> : <Moon size={16} strokeWidth={1.9} />}
    </button>
  );
};

export default ThemeToggle;
