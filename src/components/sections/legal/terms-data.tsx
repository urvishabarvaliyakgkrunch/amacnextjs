// src/components/sections/legal/terms-data.tsx
// Paraphrased from amac.ie/terms-conditions (verbatim text not retrievable) — replace with ACF copy
import type { LegalSection } from "./LegalContent";

export const TERMS_SECTIONS: LegalSection[] = [
  { heading: "Introduction", body: <p>By using this website you agree to use it lawfully and in accordance with these terms.</p> },
  { heading: "Use of Website", body: <p>This website provides information about AMAC’s products, farm supplies, agronomy services and animal feed, for personal or business use. Unauthorised access, copying content, disrupting the site or any unlawful use is prohibited.</p> },
  { heading: "Product Information & Availability", body: <p>We aim for accurate information, but stock and product details can change without notice and errors may occur. Information may be updated at any time.</p> },
  { heading: "Enquiries and Product Availability", body: <p>This website does not take online orders or payments. Enquiries, quote requests and contact-form submissions are not binding. Any purchase is agreed separately, subject to availability and the terms confirmed at that time.</p> },
  { heading: "Intellectual Property", body: <p>Logos, images, text, layouts and branding belong to AMAC or its licensors. Reuse, reproduction or commercial use requires our prior written permission, except where the law allows it.</p> },
  { heading: "Limitation of Liability", body: <p>Content is general information and may be incomplete or out of date. Please seek appropriate advice before relying on product or technical information. Nothing in these terms excludes rights or liability that cannot legally be excluded.</p> },
  { heading: "Privacy and Information You Provide", body: <p>Personal data submitted through our contact or newsletter forms is handled under our <a href="/privacy-policy">Privacy Policy</a>. Please provide accurate information and make sure you have authority to submit it. Revised terms take effect when published on this page.</p> },
];
