// src/components/sections/contact/ContactSection.tsx
import { MAX_WIDTH, SIDE_PADDING } from "@/components/layout/layout-classes";
import ContactForm from "./ContactForm";
import ContactIntro from "./ContactIntro";
import InfoCards from "./InfoCards";

export default function ContactSection() {
  return (
    <section className={`py-10 md:py-[90px] ${SIDE_PADDING}`}>
      <div className={`${MAX_WIDTH} grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_58%] lg:gap-[70px]`}>
        <ContactIntro />
        <ContactForm />
      </div>
      <InfoCards />
    </section>
  );
}
