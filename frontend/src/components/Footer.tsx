import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Instagram, ExternalLink } from "lucide-react";
import Magnetic from "./Magnetic";

const XLogo = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M18.901 2H21.981L15.251 9.69L23.17 22H16.97L12.11 14.55L5.59 22H2.51L9.72 13.73L2.13 2H8.48L12.87 8.84L18.901 2Z"
      fill="white"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-secondary-fixed/95 w-full py-14 md:py-24 border-t border-white/5 relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-12 md:mb-24">
          <div className="md:col-span-4">
            <Link className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tighter block mb-6 md:mb-8" to="/">
              Whiz-Unik
            </Link>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-sm font-medium">
              Led by professionals with over two decades of experience in structured finance and capital advisory, shaped by practical perspectives.
            </p>
            <div className="flex gap-4">
              <Magnetic>
                <a
                  href="https://www.linkedin.com/company/whizunik/"
                  aria-label="LinkedIn"
                  className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center text-white hover:brightness-110 transition-all duration-300 border border-[#0A66C2]/70"
                >
                  <Linkedin size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://x.com/WhizUnik?s=20"
                  aria-label="X"
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:brightness-125 transition-all duration-300 border border-white/20"
                >
                  <XLogo size={17} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.instagram.com/whizunik_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:brightness-110 transition-all duration-300 border border-white/25"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                >
                  <Instagram size={20} />
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-white font-bold mb-4 md:mb-8 text-xs uppercase tracking-[0.3em] opacity-40">Services</h5>
            <ul className="space-y-4">
              {[
                "Working Capital",
                "Growth Capital",
                "Market Readiness",
              ].map((item) => (
                <li key={item}>
                  <Link className="text-white/60 hover:text-primary transition-all duration-300 inline-block text-sm font-medium hover:translate-x-1" to="/services">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-white font-bold mb-4 md:mb-8 text-xs uppercase tracking-[0.3em] opacity-40">Institutional</h5>
            <ul className="space-y-4">
              <li><Link className="text-white/60 hover:text-primary transition-all duration-300 inline-block text-sm font-medium hover:translate-x-1" to="/about">Our Narrative</Link></li>
              <li><Link className="text-white/60 hover:text-primary transition-all duration-300 inline-block text-sm font-medium hover:translate-x-1" to="/contact">Protocol</Link></li>
              <li><Link className="text-white/60 hover:text-primary transition-all duration-300 inline-block text-sm font-medium hover:translate-x-1" to="/insights">Insights</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h5 className="text-white font-bold mb-4 md:mb-8 text-xs uppercase tracking-[0.3em] opacity-40">Intelligence Brief</h5>
            <p className="text-white/60 text-sm mb-8 font-medium italic">Subscribe to our monthly capital market synthesis.</p>
            <div className="flex bg-white/5 rounded-none border border-white/10 p-1 group focus-within:border-primary transition-colors">
              <input
                className="bg-transparent border-none focus:ring-0 text-white w-full text-sm px-6 placeholder:text-white/20 outline-none"
                placeholder="firm@email.com"
                type="email"
              />
              <button className="bg-primary text-white p-3 hover:brightness-110 active:scale-95 transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">
              © WhizUnik Inc. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 md:gap-10">
            <a className="text-white/20 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest" href="#">Privacy</a>
            <a className="text-white/20 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest" href="#">Legal</a>
            <a className="text-white/20 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest flex items-center gap-2" href="#">
              Sitemap <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
