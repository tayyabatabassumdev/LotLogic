import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import FeaturesSection from "../Features/FeaturesSection";
import HeroSection from "../Hero/HeroSection";
import PricingSection from "../Pricing/PricingSection";
import WhyTeamsUseSection from "../WhyTeamsUse/WhyTeamsUseSection";
import WorkFasterSection from "../WorkFaster/WorkFasterSection";
import HowLotLogicsWorksSection from "../HowLotLogicsWorks/HowLotLogicWorksSection";
import FAQSection from "../FAQ/FAQSection";
import Footer from "../Footer/Footer";
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

      <FAQSection />
      <Footer />
    </>
  );
};

export default LandingPage;
