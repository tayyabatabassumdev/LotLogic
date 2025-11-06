import { useState } from "react";
import { MobileMenu } from "../components/sections/Hero/MobileMenu";
import { Navbar } from "../components/sections/Hero/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer/Footer";
import MissionSection from "../components/sections/About/MissionSection/MissionSection";
import TeamSection from "../components/sections/About/TeamSection";
import TeamIntroSection from "../components/sections/About/TeamIntroSection";
import SubscribeSection from "../components/sections/About/SubscribeSection";
import CoreValuesSection from "../components/sections/CoreValues/CoreValuesSection";
const AboutPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="overflow-x-hidden bg-white text-dark font-poppins text-justify">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen && <MobileMenu />}
        <PageHeader
          badge="About Us"
          title="Built for Teams That Move Fast."
          subtitle="LotLogic empowers auction houses, resellers, and cataloging teams to automate item listing with speed and precision. From AI-generated titles and descriptions to team-based review and export tools — we make your cataloging smarter, not harder."
        />
        <MissionSection/>
        <TeamSection/>
        <CoreValuesSection/>
        <TeamIntroSection/>
        <SubscribeSection/>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
