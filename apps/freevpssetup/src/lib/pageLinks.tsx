import PrivacyPolicyContent from "@/components/content/PrivacyPolicyContent";
import TermsOfServiceContent from "@/components/content/TermsOfServiceContent";
import GuideLinks from "./guideLinks";
const PageLinks = [
  ...GuideLinks,
  {
    label: "Privacy Policy",
    slug: "/privacy-policy",
    content: <PrivacyPolicyContent />,
  },
  {
    label: "Terms Of Service",
    slug: "/terms-of-service",
    content: <TermsOfServiceContent />,
  },
];

export default PageLinks;
