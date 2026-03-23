import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground w-full py-16 border-t border-primary-foreground/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
        <div className="col-span-1">
          <Link className="text-xl font-headline font-bold text-primary-foreground italic block mb-6" to="/">
            Whizunik
          </Link>
          <p className="text-primary-foreground/50 text-sm leading-relaxed mb-6">
            Institutional-grade capital advisory for the modern middle market.
          </p>
        </div>

        <div>
          <h5 className="text-primary-foreground font-bold mb-6 text-sm uppercase tracking-wider">Services</h5>
          <ul className="space-y-4">
            {["Working Capital", "Growth Debt", "M&A Strategy", "Capital Planning"].map((item) => (
              <li key={item}>
                <Link className="text-primary-foreground/50 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block text-sm" to="/services">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-primary-foreground font-bold mb-6 text-sm uppercase tracking-wider">Company</h5>
          <ul className="space-y-4">
            <li><Link className="text-primary-foreground/50 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block text-sm" to="/about">About Us</Link></li>
            <li><a className="text-primary-foreground/50 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block text-sm" href="#">Careers</a></li>
            <li><Link className="text-primary-foreground/50 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block text-sm" to="/contact">Contact Us</Link></li>
            <li><Link className="text-primary-foreground/50 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block text-sm" to="/insights">Insights</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-primary-foreground font-bold mb-6 text-sm uppercase tracking-wider">Newsletter</h5>
          <div className="flex">
            <input
              className="bg-primary-foreground/5 border-none focus:ring-1 focus:ring-primary-container text-primary-foreground w-full rounded-l-lg text-sm px-4 py-3 placeholder:text-primary-foreground/30"
              placeholder="Email"
              type="email"
            />
            <button className="bg-primary-container text-primary-foreground px-4 py-2 rounded-r-lg hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-primary-foreground/30 text-sm">
          © 2024 Whizunik Institutional. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a className="text-primary-foreground/30 hover:text-primary-foreground transition-colors text-sm" href="#">Privacy Policy</a>
          <a className="text-primary-foreground/30 hover:text-primary-foreground transition-colors text-sm" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
