import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <a className="text-2xl font-headline font-bold text-primary italic" href="#">
          Whizunik
        </a>

        <nav className="hidden md:flex items-center space-x-10">
          <a className="text-primary font-semibold border-b-2 border-primary pb-1" href="#">
            Home
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
            About
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
            Services
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
            Insights
          </a>
        </nav>

        <button className="hidden md:block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 active:opacity-80 active:scale-95">
          Let's Talk
        </button>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant px-8 py-6 space-y-4">
          <a className="block text-primary font-semibold" href="#">Home</a>
          <a className="block text-on-surface-variant" href="#">About</a>
          <a className="block text-on-surface-variant" href="#">Services</a>
          <a className="block text-on-surface-variant" href="#">Insights</a>
          <button className="w-full bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold mt-4">
            Let's Talk
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
