import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
export const HeroSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full font-poppins bg-white">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <MobileMenu />}
      <main>
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 pb-14 md:pb-20 grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-12">
          <HeroContent />
          <HeroImage />
        </section>
      </main>
    </div>
  );
};
export default HeroSection;
