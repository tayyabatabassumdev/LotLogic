import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { navLinks } from "./navlinksdata";
import { useNavigationHandlers } from "./useNavigationHandlers";
interface NavLinksProps {
  isMobile?: boolean;
  onClose?: () => void;
}
export const NavLinks: React.FC<NavLinksProps> = ({ isMobile, onClose }) => {
  const { location, handleNavClick } = useNavigationHandlers();
  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col text-gray-800 font-medium"
          : "hidden md:flex items-center gap-8 text-sm font-medium text-gray-800"
      }`}
    >
      {navLinks.map((link) => (
        <li
          key={link.name}
          className={`${
            isMobile
              ? "px-6 py-3 border-b border-gray-100 hover:bg-gray-50 hover:text-primary transition cursor-pointer"
              : ""
          }`}
        >
          {link.to ? (
            location.pathname === "/" ? (
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={600}
                offset={0}
                onClick={onClose}
                className={`${
                  isMobile ? "block w-full" : "cursor-pointer hover:text-primary transition"
                }`}
              >
                {link.name}
              </ScrollLink>
            ) : (
              <span
                onClick={() => handleNavClick(link.to!)}
                className={`${isMobile ? "block w-full" : "cursor-pointer hover:text-primary transition"}`}
              >
                {link.name}
              </span>
            )
          ) : link.path ? (
            <RouterLink
              to={link.path}
              onClick={onClose}
              className={`${isMobile ? "block w-full" : "hover:text-primary cursor-pointer transition"}`}
            >
              {link.name}
            </RouterLink>
          ) : (
            <span className="text-gray-400 cursor-not-allowed">{link.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
