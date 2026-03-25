import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Twitter, ExternalLink } from "lucide-react";
import Magnetic from "./Magnetic";

const Footer = () => {
  return (
    <footer className="bg-[#1a1b1e] w-full py-24 border-t border-white/5 relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <Link className="font-headline text-4xl font-bold text-primary tracking-tighter block mb-8" to="/">
              Whizunik
            </Link>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-sm font-medium">
              Institutional-grade capital advisory for the modern middle market. Fostering clarity in complex financial ecosystems.
            </p>
            <div className="flex gap-4">
              <Magnetic>
                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                  <Linkedin size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                  <Twitter size={20} />
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em] opacity-40">Services</h5>
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
            <h5 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em] opacity-40">Institutional</h5>
            <ul className="space-y-4">
              <li><Link className="text-white/60 hover:text-primary transition-all duration-300 inline-block text-sm font-medium hover:translate-x-1" to="/about">Our Narrative</Link></li>
              <li><Link className="text-white/60 hover:text-primary transition-all duration-300 inline-block text-sm font-medium hover:translate-x-1" to="/contact">Protocol</Link></li>
              <li><Link className="text-white/60 hover:text-primary transition-all duration-300 inline-block text-sm font-medium hover:translate-x-1" to="/insights">Insights</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h5 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em] opacity-40">Intelligence Brief</h5>
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

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">
              © 2024 Whizunik Institutional. [Protocol: Verified]
            </p>
            <p className="text-white/10 text-[8px] uppercase tracking-widest font-mono">
              Last Telemetry: {new Date().toISOString().split('T')[0]} | ID: WZ-INST-88
            </p>
          </div>
          
          <div className="flex gap-10">
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
