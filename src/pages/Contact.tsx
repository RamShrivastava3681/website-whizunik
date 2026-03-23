import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <div className="bg-surface text-on-surface">
      <Header />
      <main className="pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Left: Info */}
            <div>
              <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">
                Get in Touch
              </span>
              <h1 className="font-headline text-5xl md:text-6xl text-on-secondary-fixed leading-tight mb-8">
                Let's Build Your <span className="italic text-primary">Capital</span> Future.
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-16 max-w-md">
                Whether you're exploring funding options or ready to restructure your capital
                stack, our team is here to guide you every step of the way.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-secondary-fixed mb-1">Email</h4>
                    <a href="mailto:info@whizunik.com" className="text-on-surface-variant hover:text-primary transition-colors">
                      info@whizunik.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-secondary-fixed mb-1">Phone</h4>
                    <p className="text-on-surface-variant">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-secondary-fixed mb-1">Global Locations</h4>
                    <p className="text-on-surface-variant">London · New York · Singapore · Zurich</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-surface-container-lowest p-10 rounded-xl shadow-lg space-y-6">
                <h3 className="font-headline text-2xl text-on-secondary-fixed mb-2">Schedule a Consultation</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  Fill out the form below and one of our advisors will reach out within 24 hours.
                </p>

                <div>
                  <label className="block text-sm font-semibold text-on-secondary-fixed mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-on-secondary-fixed mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-on-secondary-fixed mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-on-secondary-fixed mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your capital needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
