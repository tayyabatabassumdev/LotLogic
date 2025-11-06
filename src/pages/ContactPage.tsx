import React, { useState } from "react";
import { Navbar } from "../components/sections/Hero/Navbar";
import Footer from "../components/sections/Footer/Footer";
import { MobileMenu } from "../components/sections/Hero/MobileMenu";
import PageHeader from "../components/PageHeader";
import ContactSection from "../components/Contact/ContactSection";
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