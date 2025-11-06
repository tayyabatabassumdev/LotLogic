import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
export const useNavigationHandlers = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToSection = (section: string, offset = -70) => {
    scroller.scrollTo(section, {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuart",
      offset,
    });
  };
  const handleNavClick = (section: string) => {
    if (location.pathname === "/") scrollToSection(section);
    else navigate(`/#${section}`);
  };
  const handlePageClick = (path: string) => {
    navigate(path);
  };
  const handleButtonClick = (targetSection: string) => {
    if (location.pathname === "/") scrollToSection(targetSection);
    else navigate(`/#${targetSection}`);
  };
  return { location, navigate, scrollToSection, handleNavClick, handlePageClick, handleButtonClick };
};
