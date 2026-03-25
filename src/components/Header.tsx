import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-2xl py-3 border-b border-black/5 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary origin-left z-[110]"
        style={{ scaleX }}
      />

      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-8 md:px-12 h-14">
        <Link className="inline-flex items-center group" to="/" aria-label="Whizunik home">
          <div className="font-headline text-3xl font-bold tracking-tighter text-black group-hover:scale-105 transition-transform duration-300">
            Whiz<span className="text-primary italic font-light">unik</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-headline text-lg tracking-[-0.01em] transition-all duration-300 ${
                location.pathname === link.path
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
            className="md:hidden text-black/80 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 bg-white/98 z-[90] flex flex-col justify-center px-10 space-y-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-6xl font-headline tracking-tighter block ${
                    location.pathname === link.path
                      ? "text-primary italic font-light"
                      : "text-black"
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
              transition={{ delay: 0.6 }}
              className="pt-12"
            >
              <Link
                to="/contact"
                className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl"
                onClick={() => setMobileOpen(false)}
              >
                Get Started →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
