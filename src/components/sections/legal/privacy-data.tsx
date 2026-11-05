// src/components/sections/legal/privacy-data.tsx
// Hardcoded until the copy comes from ACF
import { Ext, type LegalSection } from "./LegalContent";

const M = <a href="mailto:info@amac.ie">info@amac.ie</a>;

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      <>
        <p>AMAC Farm Supplies Ltd. is responsible for the personal information described in this policy.</p>
        <p>
          Address: Townspark, Midleton, Co. Cork, P25 P640, Ireland.<br />Email: {M}<br />Telephone:{" "}
          <a href="tel:+353214630683">021 463 0683</a>
        </p>
      </>
    ],
  },
  {
    heading: "Information we collect",
    body: [
      <>
        <p><strong>Enquiries:</strong> Our contact form collects your name, email address, subject, selected department, message and any telephone number you choose to provide. Please include only information needed to deal with your enquiry. Form entries are stored in our website system and sent by email to the people handling them. Submission records can include the time and your IP address.</p>
        </>,
        <>
        <p><strong>Newsletter sign-ups:</strong> We collect your email address when you ask to receive updates. Your request is stored in our website system and sent to AMAC and our website support team for administration.</p>
        <p><strong>Website use:</strong> Technical information can include your IP address, browser and device information, pages visited and cookie preferences. Optional analytics and external services process information only when you enable the relevant service.</p>
      </>
    ],
  },
  {
    heading: "Why we use your information",
    body: [
      <>
        <p>We use enquiry information to answer questions, provide requested information and deal with quotations or orders. Where you ask us to take steps towards a contract, or information is needed to perform a contract with you, that is our legal basis. For other business enquiries and necessary website administration and security, we rely on our legitimate interests in providing customer service and operating a reliable website.</p>
        <p>We rely on consent for newsletter subscriptions and optional cookies or external services. Sending an enquiry does not automatically subscribe you to marketing. Where a legal obligation requires us to retain or disclose information, we process the relevant information to meet that obligation.</p>
      </>
    ],
  },
  {
    heading: "Cookies, analytics and optional services",
    body: [
      <>
        <p>Complianz manages cookie preferences on this website. You can accept optional services, reject them or choose categories through the cookie banner. Necessary functions support the operation of the site and record your choices.</p>
        <p>Use <strong>Cookie settings</strong> to review or change your preferences at any time. See our <a href="https://amac.ie/cookie-policy-eu/">Cookie Policy</a> for further cookie information.</p>
        </>,
        <>
        <p><strong>Google Analytics:</strong> When you allow statistics, Google Analytics helps us understand how visitors use the website. It can process online identifiers, device and browser information and information about pages and interactions. Read <Ext href="https://policies.google.com/privacy">Google’s Privacy Policy</Ext> for details of Google’s processing.</p>
        </>,
        <>
        <p><strong>Google services in forms and maps:</strong> Google reCAPTCHA helps protect forms from spam, and Google Maps provides the map on our Contact page. These services are held until you allow the relevant Google services through the consent controls. Enabling them can send your IP address and browser or interaction information to Google. If you prefer not to enable them, you can contact us by telephone or email instead.</p>
        <p>Cookie consent and newsletter consent are separate choices. Allowing Google services does not subscribe you to our newsletter.</p>
        </>,
        <>
        <p><strong>Delivery Areas map:</strong> This interactive map loads only when you select “Allow external services and load map”. It then connects to CARTO for map tiles, Cloudflare for map software and Google Fonts for fonts. These providers receive technical information such as your IP address and browser information. The delivery-area information is also available as text without loading the map.</p>
        <p>Use “Hide map and withdraw map consent” to remove the map. Rejecting optional services also removes a loaded map. Changing consent does not undo information already transmitted. Reload the page after changing cookie preferences to apply your choices to services that were already loaded.</p>
      </>
    ],
  },
  {
    heading: "Who receives your information",
    body: [
      <>
        <p>Relevant AMAC staff receive information needed to answer enquiries and manage subscription requests. Method Marketing provides website and marketing support and receives copies of contact-form and newsletter notifications for that work. Access to form records is limited to people who need it for administration or support.</p>
        </>,
        <>
        <p>Providers supporting website hosting, email delivery, maintenance and security may process information as needed to provide those services. Optional services receive information when you enable them, as explained above. Their notices provide further details: <Ext href="https://policies.google.com/privacy">Google</Ext>, <Ext href="https://carto.com/privacy">CARTO</Ext> and <Ext href="https://www.cloudflare.com/privacypolicy/">Cloudflare</Ext>.</p>
        <p>Information may also be disclosed where necessary to comply with a legal obligation or to establish, exercise or defend legal claims.</p>
      </>
    ],
  },
  {
    heading: "International processing",
    body: [
      <>
        <p>Some external providers operate internationally, so enabling their services can involve processing outside the European Economic Area, including in the United States. Their privacy notices explain their processing locations and applicable transfer safeguards. For example, Google describes its use of adequacy decisions, the EU-US Data Privacy Framework and standard contractual clauses in its <Ext href="https://policies.google.com/privacy/frameworks">data transfer information</Ext>.</p>
        <p>You can contact us at {M} for further information about recipients and transfer safeguards relevant to your personal information.</p>
      </>
    ],
  },
  {
    heading: "How long we keep information",
    body: [
      <>
        <p>Retention depends on why information was collected and whether it is still needed. For enquiries, relevant factors include whether the query has been resolved, any ongoing customer relationship and necessary follow-up. Records connected with transactions, complaints or disputes may need to be retained for applicable legal obligations or legal claims.</p>
        </>,
        <>
        <p>Newsletter information is used to manage your subscription while you wish to receive updates. You can withdraw your request by emailing info@amac.ie. A minimal record of an opt-out may be needed to respect your preference. Technical logs and backup copies are retained according to operational needs such as security, recovery and applicable legal obligations. Cookie retention varies by cookie; refer to the Cookie Policy for the information available.</p>
      </>
    ],
  },
  {
    heading: "Your rights and choices",
    body: [
      <>
        <p>Depending on the circumstances, you have rights to access your personal information, correct inaccurate information, request erasure, restrict processing, object to processing based on legitimate interests and receive certain information in a portable format. You can object to direct marketing at any time.</p>
        <p>Where processing relies on consent, you can withdraw it at any time without affecting processing that was lawful before withdrawal. Change optional service choices through Cookie settings or the map controls, and contact {M} about newsletter consent or other privacy requests. We may need to verify your identity before providing personal information.</p>
        <p>You also have the right to complain to Ireland’s <Ext href="https://www.dataprotection.ie/">Data Protection Commission</Ext>.</p>
      </>
    ],
  },
  {
    heading: "Contact and policy updates",
    body: [
      <>
        <p>For questions about this policy or how your information is handled, email {M} or write to AMAC Farm Supplies Ltd., Townspark, Midleton, Co. Cork, P25 P640, Ireland.</p>
        <p>We may update this policy when the website or our handling of personal information changes. The date at the top identifies the latest update.</p>
      </>
    ],
  },
];
