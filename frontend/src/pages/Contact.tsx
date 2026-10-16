import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import { toast } from "sonner";

const walkthroughHighlights = [
  "Transactions move between departments",
  "My Queue tells each user what to do next",
  "Approvals control transaction progression",
  "Physical movements control inventory",
  "Actual and expected cash remain distinct",
  "Management sees operational and financial priorities",
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const queryType = searchParams.get("type");

  const [inquiryType, setInquiryType] = useState<"demo" | "advisory" | "general">("demo");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (queryType === "demo" || queryType === "walkthrough") {
      setInquiryType("demo");
    } else if (queryType === "advisory" || queryType === "capital") {
      setInquiryType("advisory");
    }
  }, [queryType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      message: formData.message.trim(),
      inquiryType:
        inquiryType === "demo"
          ? "Request a Demo (Whizunik Hub & Command)"
          : inquiryType === "advisory"
          ? "Structured Capital Advisory"
          : "General Inquiry",
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.company || !trimmedData.message) {
      toast.error("Please fill all form fields.");
      return;
    }

    const contactApiUrl =
      (import.meta.env.VITE_CONTACT_API_URL as string | undefined) ||
      (import.meta.env.VITE_URL ? `${import.meta.env.VITE_URL}/api/contact` : undefined) ||
      (import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/contact` : undefined) ||
      "http://localhost:4040/api/contact";

    setIsSubmitting(true);

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trimmedData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      toast.success(
        inquiryType === "demo"
          ? "Thank you! Your demo request has been received. Our team will contact you shortly."
          : "Thank you! Your inquiry has been received."
      );
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast.error("Unable to send the request right now. Please try again in a moment.");
      console.error("Contact email error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-foreground selection:bg-primary/20 min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 60, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[5%] left-[-5%] w-[35vw] h-[35vw] bg-primary/5 rounded-full blur-[100px]" 
        />
      </div>

      <main className="relative pt-28 md:pt-44 pb-16 md:pb-32">
        <section className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
            
            {/* Left: Walkthrough Explanation */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 shadow-sm">
                Request a Walkthrough
              </span>
              <h1 className="serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-bold tracking-tight leading-[1.1] mb-6">
                See WhizUnik Command <br/>
                <span className="text-primary italic font-light">in action.</span>
              </h1>
              <p className="text-black/75 text-base sm:text-lg leading-relaxed mb-8">
                See how Command connects Sales, Procurement, Checker, Finance, Treasury, and Warehouse through controlled workflows while giving management visibility across the transaction lifecycle.
              </p>

              <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-black/10 mb-10 shadow-sm">
                <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-4">We'll show you how:</h4>
                <div className="space-y-3">
                  {walkthroughHighlights.map((pt) => (
                    <div key={pt} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-black/80 text-xs sm:text-sm font-medium leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
                <p className="text-black/80 text-xs sm:text-sm font-semibold mt-5 pt-4 border-t border-black/5">
                  See what connected operations could look like in your business.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, title: "Email", value: "sankalp@whizunik.com", href: "mailto:sankalp@whizunik.com" },
                  { icon: Phone, title: "Phone", value: "+91-7045941942", href: "tel:+917045941942" },
                  { icon: MapPin, title: "Headquarters", value: "Max Towers, 16th Floor, Sector 16 B, Noida, 201301", href: "#" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-black/40">{item.title}</p>
                      <a href={item.href} className="text-sm font-bold text-black hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Walkthrough Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-primary/10 rounded-3xl blur-3xl -z-10" />
              
              <form 
                onSubmit={handleSubmit} 
                className="bg-white p-7 sm:p-10 rounded-3xl border border-black/10 shadow-xl space-y-5"
              >
                <div>
                  <h3 className="serif-headline text-2xl sm:text-3xl text-black font-bold mb-2">
                    {inquiryType === "demo" ? (
                      <>
                        Request a <span className="text-primary italic font-light">Live Product Demo</span>
                      </>
                    ) : inquiryType === "advisory" ? (
                      <>
                        Strategic <span className="text-primary italic font-light">Capital Advisory</span>
                      </>
                    ) : (
                      <>
                        Start a <span className="text-primary italic font-light">Conversation</span>
                      </>
                    )}
                  </h3>
                  <p className="text-black/60 text-xs sm:text-sm leading-relaxed">
                    {inquiryType === "demo"
                      ? "See Whizunik Hub & Command in action. Explore connected operational workflows, finance workbenches, and real-time management visibility."
                      : "Discuss your working capital, trade finance, or capital structuring requirements directly with our team."}
                  </p>
                </div>

                {/* Inquiry Type Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-black/70 uppercase tracking-wider">Inquiry Type</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setInquiryType("demo")}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all border text-center ${
                        inquiryType === "demo"
                          ? "bg-primary text-white border-primary shadow-sm shadow-primary/30"
                          : "bg-neutral-50 text-black/70 border-black/10 hover:border-black/20"
                      }`}
                    >
                      Request a Demo
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType("advisory")}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all border text-center ${
                        inquiryType === "advisory"
                          ? "bg-primary text-white border-primary shadow-sm shadow-primary/30"
                          : "bg-neutral-50 text-black/70 border-black/10 hover:border-black/20"
                      }`}
                    >
                      Capital Advisory
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType("general")}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all border text-center ${
                        inquiryType === "general"
                          ? "bg-primary text-white border-primary shadow-sm shadow-primary/30"
                          : "bg-neutral-50 text-black/70 border-black/10 hover:border-black/20"
                      }`}
                    >
                      General Inquiry
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-black/70 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-neutral-50 border border-black/10 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:border-primary focus:bg-white transition-all outline-none"
                    placeholder="e.g. Rahul Sharma"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-black/70 uppercase tracking-wider">Business Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-neutral-50 border border-black/10 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:border-primary focus:bg-white transition-all outline-none"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-black/70 uppercase tracking-wider">Company / Organisation</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                    className="w-full bg-neutral-50 border border-black/10 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:border-primary focus:bg-white transition-all outline-none"
                    placeholder="Company name, current ERP or spreadsheets"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-black/70 uppercase tracking-wider">
                    {inquiryType === "demo" ? "Operational Requirement / Demo Focus" : "Inquiry Details / Message"}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-neutral-50 border border-black/10 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:border-primary focus:bg-white transition-all outline-none resize-none"
                    placeholder={
                      inquiryType === "demo"
                        ? "Tell us about your team size, workflow challenges, or specific departments you'd like to see..."
                        : "Tell us about your capital requirements, trade structures, or company profile..."
                    }
                    required
                  />
                </div>

                <Magnetic>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/25 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>{inquiryType === "demo" ? "Schedule a Live Demo" : "Send Inquiry"}</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </Magnetic>
              </form>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
