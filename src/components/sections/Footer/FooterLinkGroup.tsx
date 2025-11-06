import React from "react";
import { scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import type { LinkItem } from "./footerData";
interface FooterLinkGroupProps {
  title: string;
  links: LinkItem[];
}
const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => {
  const existingSections = ["home", "about", "pricing", "how-it-works"];
  const location = useLocation();
  const navigate = useNavigate();
const handleClick = (section: string) => {
  if (location.pathname === "/") {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 600,
      offset: -80,
    });
  } else {
    navigate(`/#${section}`);
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 600,
        offset: 0,
      });
    }, 400);
  }
};
  return (
    <div>
      <h4 className="text-gray-900 font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        {links.map((link, index) => {
          const isSection = link.to ? existingSections.includes(link.to) : false;

          return (
            <li key={index}>
              {isSection ? (
                <button
                  onClick={() => handleClick(link.to!)}
                  className="hover:text-primary cursor-pointer transition bg-transparent border-none p-0 text-inherit"
                >
                  {link.label}
                </button>
              ) : link.path ? (
                <RouterLink
                  to={link.path}
                  className="hover:text-primary cursor-pointer transition"
                >
                  {link.label}
                </RouterLink>
              ) : (
                <span className="text-gray-400 cursor-not-allowed">
                  {link.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinkGroup;
