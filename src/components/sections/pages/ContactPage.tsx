import React, { useState } from "react";
import { Navbar } from "../Hero/Navbar";
import Footer from "../Footer/Footer";
import { MobileMenu } from "../Hero/MobileMenu";
import PageHeader from "../../PageHeader";
import ContactSection from "../../Contact/ContactSection";

const ContactPage : React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <Navbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    {menuOpen && <MobileMenu />}
    <PageHeader badge="Contact Us" title="Get in Touch" subtitle="Your data is protected under our Privacy Policy, and you control how it’s used for billing, analytics, and service improvement."/>
     <ContactSection/>
     <Footer />
    </>
  )
}

export default ContactPage