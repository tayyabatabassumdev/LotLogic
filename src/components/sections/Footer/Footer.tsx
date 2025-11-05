import React from "react";
import { Link as RouterLink } from "react-router-dom"; 
import logo from "../../../assets/logo.svg";
import SocialIcon from "./SocialIcon";
import FooterLinkGroup from "./FooterLinkGroup";
import { pagesLinks, utilityLinks, socialIcons } from "./footerData";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-14 pb-6 text-center">
      <div className="text-left max-w-[1200px] mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:text-center">
        <div className="text-left">
          <img src={logo} alt="LotLogic Logo" className="mb-4" />
          <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-[280px]">
            Streamline your business operations with our powerful suite of
            solutions. Boost productivity and drive growth with LotLogic.
          </p>

          <div className="flex items-center gap-3">
            {socialIcons.map((item, index) => (
              <SocialIcon key={index} href={item.href} Icon={item.Icon} />
            ))}
          </div>
        </div>
        <FooterLinkGroup title="Pages" links={pagesLinks} />
        <FooterLinkGroup title="Utility Pages" links={utilityLinks} />
      </div>
      <div className="font-semibold text-black border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-6 md:px-8 text-sm">
        <p>
          © 2011 - {new Date().getFullYear()}{" "}
          <span className="text-primary font-medium">LotLogic</span>. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <RouterLink to="/termsandconditions" className="hover:text-primary">
            Terms & Conditions
          </RouterLink>
          <RouterLink to="/privacypolicy" className="hover:text-primary">
            Privacy Policy
          </RouterLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
