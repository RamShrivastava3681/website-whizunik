import LegalPage from "@/components/site/LegalPage";
import usePageMeta from "@/hooks/usePageMeta";
import { site } from "@/lib/content";

const Terms = () => {
  usePageMeta({
    title: "Terms of Use | Whizunik",
    description:
      "Terms governing use of the Whizunik website and the distinction between Whizunik Command and Structured Capital Advisory.",
    path: "/terms",
  });

  return (
    <LegalPage
      title="Terms of Use"
      intro="These terms govern use of this website. They do not replace any signed agreement for Whizunik Command or Structured Capital Advisory."
      updated="30 October 2026"
      sections={[
        {
          heading: "Use of this website",
          paragraphs: [
            "You may use this website for lawful, informational purposes. You may not attempt to disrupt the site, gain unauthorised access to it, or use automated means to extract content at a rate that affects availability.",
          ],
        },
        {
          heading: "Product and service information",
          paragraphs: [
            "Descriptions of Whizunik Command on this website are provided for orientation. Product scope, configuration and commercial terms are defined in a written agreement.",
            "Structured Capital Advisory is a separate service. Nothing on this website constitutes an offer of financing, an investment recommendation, or a commitment to provide advisory services.",
          ],
        },
        {
          heading: "Product screenshots",
          paragraphs: [
            "Screenshots show the product interface with illustrative workspace data. Figures, names and records shown are examples and do not represent any client's actual position.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "The Whizunik name, the Whizunik Command product, and the content and design of this website are protected by applicable intellectual property law. No licence is granted except as required to view the site.",
          ],
        },
        {
          heading: "No warranty",
          paragraphs: [
            "This website is provided on an “as is” basis. While we take care to keep information accurate and current, we do not warrant that it is complete, error-free or suitable for a particular purpose.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the extent permitted by law, Whizunik is not liable for indirect or consequential loss arising from use of this website. Nothing in these terms limits liability that cannot lawfully be limited.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of India, and the courts at Gautam Buddh Nagar, Uttar Pradesh have jurisdiction over disputes relating to this website.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [`Questions about these terms can be sent to ${site.email}.`],
        },
      ]}
    />
  );
};

export default Terms;
