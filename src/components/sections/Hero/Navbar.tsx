import React from "react";
import logo from "../../../assets/logo.svg";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Pricing", to: "pricing" },
  { name: "How it works", to: "how-it-works" },
  { name: "Contact", path: "/contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    }
  };
  const handleSetActive = (to: string) => {
    if (location.pathname === "/") {
      window.history.replaceState(null, "", `/#${to}`);
    }
  };

  return (
    <header className="w-full py-6">
      <div className="max-w-[1200px] mx-auto px-4">
        <nav
          className="w-full flex items-center justify-between px-4 md:px-6 py-2 rounded-full bg-[#FBFCFF] shadow-sm"
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-3">
            <img src={logo} alt="LotLogic" className="w-7 h-7" />
            <span className="font-bold text-gray-800 text-lg">LotLogic</span>
          </div>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.to ? (
                  location.pathname === "/" ? (
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={600}
                      spy={true}
                      offset={0}
                       onSetActive={handleSetActive}
                      activeClass="text-primary font-semibold"
                      className="cursor-pointer transition hover:text-primary"
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <span
                      onClick={() => handleNavClick(link.to!)}
                      className="cursor-pointer hover:text-primary transition"
                    >
                      {link.name}
                    </span>
                  )
                ) : link.path ? (
                  <RouterLink
                    to={link.path}
                    className="hover:text-primary cursor-pointer transition"
                  >
                    {link.name}
                  </RouterLink>
                ) : (
                  <span className="text-gray-400 cursor-not-allowed">
                    {link.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-primary cursor-pointer text-sm font-medium">
              Book a demo
            </button>
            <button className="bg-primary cursor-pointer text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:opacity-95 transition">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
