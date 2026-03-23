const Footer = () => {
  return (
    <footer className="bg-on-secondary-fixed w-full py-16 border-t border-primary-foreground/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
        <div className="col-span-1">
          <a className="text-xl font-headline font-bold text-primary-foreground italic block mb-6" href="#">
            Whizunik
          </a>
          <p className="text-primary-foreground/50 text-sm leading-relaxed mb-6">
            Institutional-grade capital advisory for the modern middle market.
          </p>
        </div>

        <div>
          <h5 className="text-primary-foreground font-bold mb-6 text-sm uppercase tracking-wider">Services</h5>
          <ul className="space-y-4">
            {["Working Capital", "Growth Debt", "M&A Strategy", "Capital Planning"].map((item) => (
              <li key={item}>
                <a className="text-primary-foreground/50 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block text-sm" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-primary-foreground font-bold mb-6 text-sm uppercase tracking-wider">Company</h5>
          <ul className="space-y-4">
            {["About Us", "Careers", "Contact Us", "Insights"].map((item) => (
              <li key={item}>
                <a className="text-primary-foreground/50 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block text-sm" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-primary-foreground font-bold mb-6 text-sm uppercase tracking-wider">Legal</h5>
          <ul className="space-y-4">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <li key={item}>
                <a className="text-primary-foreground/50 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block text-sm" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-primary-foreground/10">
        <p className="text-primary-foreground/30 text-sm">
          © 2024 Whizunik Institutional. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
