import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Insights", path: "/insights" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled
            ? "bg-white/80 backdrop-blur-2xl py-3 border-b border-black/5 shadow-sm"
            : "bg-transparent py-6"
          }`}
      >
        <div className="flex justify-between items-center max-w-[1440px] mx-auto px-8 md:px-12 h-14">
          <Link className="inline-flex items-center group" to="/" aria-label="Whiz-Unik home">
            <img
              src="/logo-vertical-light (2).png"
              alt="Whiz-Unik"
              className="h-14 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-headline text-lg tracking-[-0.01em] transition-all duration-300 ${location.pathname === link.path
                    ? "text-primary"
                    : "text-black/60 hover:text-primary"
                  }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="hidden md:flex bg-primary text-white px-8 py-2.5 rounded-full font-bold text-xs tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all duration-300 items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </Link>

            <button
              className="md:hidden text-black/80 hover:text-primary transition-colors z-[120]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="md:hidden fixed inset-0 bg-white/98 z-[190] flex flex-col px-6 pt-28 pb-10 overflow-y-auto"
              >
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="absolute top-6 right-6 h-10 w-10 rounded-full border border-black/10 bg-white text-black/80 hover:text-primary hover:border-primary/30 transition-colors flex items-center justify-center"
                >
                  <X size={22} />
                </button>

                <div className="w-full max-w-md mx-auto border border-black/5 rounded-3xl bg-white shadow-sm p-4 space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ x: 12, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.08 + i * 0.06 }}
                    >
                      <Link
                        to={link.path}
                        className={`block rounded-2xl px-4 py-3 text-2xl font-headline tracking-tight transition-colors ${location.pathname === link.path
                            ? "text-primary bg-primary/5 italic font-light"
                            : "text-black hover:bg-black/[0.03]"
                          }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="pt-4"
                  >
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg"
                      onClick={() => setMobileOpen(false)}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default Header;
