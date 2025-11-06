import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import FeaturesSection from "../components/sections/Features/FeaturesSection";
import HeroSection from "../components/sections/Hero/HeroSection";
import PricingSection from "../components/sections/Pricing/PricingSection";
import WhyTeamsUseSection from "../components/sections/WhyTeamsUse/WhyTeamsUseSection";
import WorkFasterSection from "../components/sections/WorkFaster/WorkFasterSection";
import HowLotLogicsWorksSection from "../components/sections/HowLotLogicsWorks/HowLotLogicWorksSection";
import FAQSection from "../components/sections/FAQ/FAQSection";
import Footer from "../components/sections/Footer/Footer";
import { Element } from "react-scroll";
const LandingPage = () => {
  const location = useLocation();
  useEffect(() => {
  if (location.hash) {
    const section = location.hash.replace("#", "");
    const timeout = setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 600,
        offset: 0,
      });
    }, 300);
    return () => clearTimeout(timeout);
  }
}, [location]);
  return (
    <>
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="about">
        <FeaturesSection />
      </Element>
      <WorkFasterSection />
      <WhyTeamsUseSection />
      <Element name="pricing">
        <PricingSection />
      </Element>
      <Element name="how-it-works">
        <HowLotLogicsWorksSection />
      </Element>
      <Element name="faq"><FAQSection  /></Element>
      <Footer />
    </>
  );
};
export default LandingPage;
