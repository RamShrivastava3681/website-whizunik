import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./site/Logo";
import Container from "./site/Container";
import { site } from "@/lib/content";

const XLogo = ({ size = 15 }: { size?: number }) => (
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
      fill="currentColor"
    />
  </svg>
);

const columns = [
  {
    title: "Product",
    links: [
      { label: "Whizunik Command", to: "/command" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Request a walkthrough", to: "/contact?type=walkthrough" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Structured Capital Advisory", to: "/strategic-advisory" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Use", to: "/terms" },
    ],
  },
];

const socialLinks = [
  {
    label: "Whizunik on LinkedIn",
    href: "https://www.linkedin.com/company/whizunik/",
    icon: <Linkedin size={16} />,
  },
  {
    label: "Whizunik on X",
    href: "https://x.com/WhizUnik",
    icon: <XLogo />,
  },
  {
    label: "Whizunik on Instagram",
    href: "https://www.instagram.com/whizunik_",
    icon: <Instagram size={16} />,
  },
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-[hsl(var(--footer))] text-white">
    <Container className="py-12 md:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Logo tone="onDark" />
          <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-white/55">
            Operating software for growing businesses. Structured Capital Advisory is a
            separate service, available when capital strategy becomes the next question.
          </p>

          <div className="mt-6 flex gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/70 transition-colors hover:border-white/35 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-5">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55">
                {column.title}
              </p>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[13px] text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="md:col-span-3">
          <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55">
            Contact
          </p>
          <ul className="space-y-2.5 text-[13px] text-white/70">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail size={14} aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={14} aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li className="flex gap-2 pt-1 leading-relaxed">
              <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>
                Max Towers, 16th Floor
                <br />
                Sector 16B, Noida 201301
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-[12px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Whizunik. All rights reserved.</p>
        <p>Whizunik Command and Structured Capital Advisory are distinct offerings.</p>
      </div>
    </Container>
  </footer>
);

export default Footer;
