import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/site/Container";
import usePageMeta from "@/hooks/usePageMeta";
import { site } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type InquiryType = "walkthrough" | "advisory" | "general";

const inquiryOptions: { value: InquiryType; label: string; description: string }[] = [
  {
    value: "walkthrough",
    label: "Command walkthrough",
    description: "See the operating flow with your own example.",
  },
  {
    value: "advisory",
    label: "Capital advisory",
    description: "Discuss a capital requirement or mandate.",
  },
  {
    value: "general",
    label: "General enquiry",
    description: "Anything else.",
  },
];

const fieldClass =
  "w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-[14px] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

const Contact = () => {
  usePageMeta({
    title: "Contact | Request a Whizunik Command walkthrough",
    description:
      "Bring one workflow, reporting gap or management question. Request a focused Whizunik Command walkthrough or a Structured Capital Advisory conversation.",
    path: "/contact",
  });

  const [searchParams] = useSearchParams();
  const queryType = searchParams.get("type");

  const [inquiryType, setInquiryType] = useState<InquiryType>("walkthrough");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (queryType === "advisory" || queryType === "capital") setInquiryType("advisory");
    else if (queryType === "general") setInquiryType("general");
    else if (queryType) setInquiryType("walkthrough");
  }, [queryType]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      message: formData.message.trim(),
      inquiryType:
        inquiryType === "walkthrough"
          ? "Request a Walkthrough (Whizunik Command)"
          : inquiryType === "advisory"
            ? "Structured Capital Advisory"
            : "General Inquiry",
    };

    if (!payload.name || !payload.email || !payload.company || !payload.message) {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit request");

      toast.success(
        inquiryType === "walkthrough"
          ? "Thank you. Your walkthrough request has been received and our team will contact you shortly."
          : "Thank you. Your enquiry has been received and our team will contact you shortly.",
      );
      trackEvent("generate_lead", { inquiry_type: inquiryType });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast.error("Unable to send the request right now. Please try again in a moment.");
      console.error("Contact email error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeInquiry = inquiryOptions.find((option) => option.value === inquiryType);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main" className="pt-16">
        <div className="border-b border-border pb-10 pt-12 md:pt-16">
          <Container>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 max-w-3xl text-display text-balance">
              Request a focused walkthrough.
            </h1>
            <p className="mt-5 max-w-2xl text-lede">
              Bring one workflow, reporting gap or management question. We will show you how
              Command could fit.
            </p>
          </Container>
        </div>

        <Container className="py-10 md:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h2 className="text-section-title">What to expect</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                A short working session, not a slide presentation. We will walk through the part of
                the flow you care about, using your example, and be direct about where Command fits
                and where it does not.
              </p>

              <ul className="mt-8 divide-y divide-border border-y border-border">
                {[
                  ["30–45 minutes", "A focused session with the product in front of you."],
                  ["One workflow", "Bring a reporting gap, a stuck handover or a management question."],
                  ["No obligation", "No procurement process, no advisory mandate required."],
                ].map(([title, body]) => (
                  <li key={title} className="py-4">
                    <p className="text-[13.5px] font-semibold">{title}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3 text-[13.5px]">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-foreground hover:text-primary"
                >
                  <Mail size={15} className="text-brand-teal" aria-hidden="true" />
                  {site.email}
                </a>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 text-foreground hover:text-primary"
                >
                  <Phone size={15} className="text-brand-teal" aria-hidden="true" />
                  {site.phone}
                </a>
                <p className="flex items-start gap-2.5 text-muted-foreground">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-brand-teal" aria-hidden="true" />
                  {site.address}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-border bg-surface-container p-6 sm:p-8"
              >
                <fieldset>
                  <legend className="text-meta mb-3">What is this about?</legend>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {inquiryOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setInquiryType(option.value)}
                        aria-pressed={inquiryType === option.value}
                        className={cn(
                          "rounded-lg border px-3 py-2.5 text-left text-[12.5px] font-semibold transition-colors",
                          inquiryType === option.value
                            ? "border-primary bg-primary/[0.06] text-primary"
                            : "border-border bg-card text-muted-foreground hover:border-foreground/25 hover:text-foreground",
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-[12px] text-muted-foreground">
                    {activeInquiry?.description}
                  </p>
                </fieldset>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-meta mb-1.5 block">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(event) =>
                        setFormData((previous) => ({ ...previous, name: event.target.value }))
                      }
                      placeholder="Full name"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-meta mb-1.5 block">
                      Business email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(event) =>
                        setFormData((previous) => ({ ...previous, email: event.target.value }))
                      }
                      placeholder="name@company.com"
                      className={fieldClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="text-meta mb-1.5 block">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      required
                      value={formData.company}
                      onChange={(event) =>
                        setFormData((previous) => ({ ...previous, company: event.target.value }))
                      }
                      placeholder="Company name"
                      className={fieldClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-meta mb-1.5 block">
                      {inquiryType === "advisory" ? "Capital requirement" : "What would you like to see?"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(event) =>
                        setFormData((previous) => ({ ...previous, message: event.target.value }))
                      }
                      placeholder={
                        inquiryType === "advisory"
                          ? "Working capital, growth funding, a lender conversation…"
                          : "The workflow, reporting gap or management question you have in mind…"
                      }
                      className={cn(fieldClass, "resize-y")}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-[13.5px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    "Sending request…"
                  ) : (
                    <>
                      Send request
                      <Send size={15} aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">
                  By submitting this form you agree to our{" "}
                  <Link to="/privacy" className="text-foreground underline underline-offset-2">
                    privacy policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
