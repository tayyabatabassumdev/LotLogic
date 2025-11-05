import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 ">
        <ContactInfo/>
        <ContactForm/>
      </div>
    </section>
  );
};

export default ContactSection;
