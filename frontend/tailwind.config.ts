import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        headline: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["DM Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        /* ---- Semantic tokens (theme aware) ---- */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        footer: "hsl(var(--footer))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          container: "hsl(var(--primary-container))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          fixed: "hsl(var(--secondary-fixed))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          container: "hsl(var(--surface-container))",
          "container-low": "hsl(var(--surface-container-low))",
          "container-lowest": "hsl(var(--surface-container-lowest))",
          "container-high": "hsl(var(--surface-container-high))",
          "container-highest": "hsl(var(--surface-container-highest))",
          variant: "hsl(var(--surface-variant))",
        },
        "on-surface": {
          DEFAULT: "hsl(var(--on-surface))",
          variant: "hsl(var(--on-surface-variant))",
        },
        outline: {
          DEFAULT: "hsl(var(--outline))",
          variant: "hsl(var(--outline-variant))",
        },
        "on-secondary-fixed": "hsl(var(--on-secondary-fixed))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },

        /* ---- Brand palette ---- */
        brand: {
          navy: "hsl(var(--brand-navy))",
          blue: "hsl(var(--brand-blue))",
          royal: "hsl(var(--brand-royal))",
          light: "hsl(var(--brand-light))",
          teal: "hsl(var(--brand-teal))",
        },

        /* ---- Status colours ---- */
        success: {
          DEFAULT: "hsl(var(--success))",
          soft: "hsl(var(--success) / 0.12)",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          soft: "hsl(var(--warning) / 0.12)",
          foreground: "hsl(var(--warning-foreground))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          soft: "hsl(var(--danger) / 0.12)",
          foreground: "hsl(var(--danger-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          soft: "hsl(var(--info) / 0.12)",
          foreground: "hsl(var(--info-foreground))",
        },

        /* ---- Legacy aliases kept so older markup inherits the new palette ---- */
        ink: "hsl(var(--foreground))",
        navy: "hsl(var(--brand-navy))",
        blue: "hsl(var(--primary))",
        paper: "hsl(var(--surface-container))",
        line: "hsl(var(--border))",
        mutedBlue: "hsl(var(--muted-foreground))",
        teal: {
          accent: "hsl(var(--success))",
          light: "hsl(var(--success) / 0.1)",
          border: "hsl(var(--success) / 0.28)",
        },
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "10px",
        xl: "12px",
        "2xl": "14px",
        "3xl": "18px",
        full: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(14 35 64 / 0.04)",
        card: "0 1px 2px 0 rgb(14 35 64 / 0.03), 0 10px 24px -20px rgb(14 35 64 / 0.22)",
        panel: "0 1px 2px 0 rgb(14 35 64 / 0.04), 0 18px 44px -30px rgb(14 35 64 / 0.28)",
        pop: "0 8px 24px -12px rgb(14 35 64 / 0.2), 0 2px 6px -2px rgb(14 35 64 / 0.06)",
      },
      fontSize: {
        "2xs": ["11px", { lineHeight: "16px", letterSpacing: "0.06em" }],
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
