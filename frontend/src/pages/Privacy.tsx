import LegalPage from "@/components/site/LegalPage";
import usePageMeta from "@/hooks/usePageMeta";
import { site } from "@/lib/content";

const Privacy = () => {
  usePageMeta({
    title: "Privacy Policy | Whizunik",
    description:
      "How Whizunik collects, uses and protects personal information submitted through this website and during product or advisory conversations.",
    path: "/privacy",
  });

  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what information Whizunik collects through this website, why it is collected, and how it is handled."
      updated="30 October 2026"
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "When you submit the contact or walkthrough form, we collect the name, business email address, company name and message you provide. We also record which type of enquiry you selected so the request reaches the right team.",
            "Our hosting provider may record standard technical information such as IP address, browser type and pages requested in server logs, for security and reliability purposes.",
          ],
        },
        {
          heading: "How we use it",
          paragraphs: [
            "We use the information you submit to respond to your enquiry, arrange a walkthrough or advisory discussion, and keep a record of the conversation.",
            "We do not sell personal information, and we do not use enquiry details for unrelated marketing without your consent.",
          ],
        },
        {
          heading: "Sharing",
          paragraphs: [
            "Information is shared only with service providers that help us operate this website and our email, under appropriate confidentiality obligations, or where disclosure is required by law.",
          ],
        },
        {
          heading: "Retention",
          paragraphs: [
            "Enquiry records are retained for as long as needed to handle the request and maintain a reasonable business record, after which they are deleted or anonymised.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            "You may ask us to confirm what personal information we hold about you, to correct it, or to delete it. Requests can be sent to the contact address below and will be handled within a reasonable period.",
          ],
        },
        {
          heading: "Cookies and analytics",
          paragraphs: [
            "This website stores a single preference in your browser to remember your light or dark theme choice. That preference stays on your device and is not used to identify you.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about this policy can be sent to ${site.email}. Our office is at ${site.address}.`,
          ],
        },
      ]}
    />
  );
};

export default Privacy;
