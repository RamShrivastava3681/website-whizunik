import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import ThemeToggle from "./ThemeToggle";
import Logo from "./site/Logo";
import Container from "./site/Container";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

type HeaderProps = {
  /** Retained for page compatibility; the header is always on a light surface. */
  variant?: "default" | "overlay";
};

const Header = (_props: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/command") {
      return ["/command", "/whizunik-command", "/hub", "/whizunik-hub", "/"].includes(
        location.pathname,
      );
    }
    if (path === "/strategic-advisory") {
      return ["/strategic-advisory", "/services", "/strategic-capital-advisory"].includes(
        location.pathname,
      );
    }
    return location.pathname === path;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-colors duration-200",
          scrolled || mobileOpen
            ? "border-b border-border bg-background/95 backdrop-blur-md"
            : "border-b border-transparent bg-background/70 backdrop-blur-sm",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-[13px] font-semibold transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link
              to="/contact?type=walkthrough"
              className="hidden h-9 items-center gap-2 rounded-lg bg-primary px-4 text-[12.5px] font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 md:inline-flex"
            >
              Request a walkthrough
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:border-foreground/30 lg:hidden"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>
      </header>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                className="fixed inset-0 z-[95] flex flex-col bg-background pt-20 lg:hidden"
              >
                <Container className="flex-1 overflow-y-auto pb-10">
                  <nav aria-label="Mobile" className="divide-y divide-border border-y border-border">
                    {navLinks.map((link) => {
                      const active = isActive(link.path);
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex items-center justify-between py-4 text-[15px] font-semibold",
                            active ? "text-primary" : "text-foreground",
                          )}
                        >
                          {link.label}
                          {active && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                        </Link>
                      );
                    })}
                  </nav>

                  <Link
                    to="/contact?type=walkthrough"
                    onClick={() => setMobileOpen(false)}
                    className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-[13.5px] font-semibold text-primary-foreground"
                  >
                    Request a walkthrough
                    <ArrowUpRight size={15} />
                  </Link>
                </Container>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default Header;
