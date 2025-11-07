import React from "react";
import { NavLinks } from "./NavLinks";
import { useNavigationHandlers } from "./useNavigationHandlers";
export const MobileMenu: React.FC = () => {
  const { handleButtonClick ,handlePageClick} = useNavigationHandlers();
  const handleCloseMenu = () => {
    window.dispatchEvent(new CustomEvent("closeMobileMenu"));
  };
  return (
    <div className="md:hidden mt-3 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden max-w-[1200px] mx-auto px-4">
      <NavLinks isMobile onClose={handleCloseMenu} />

      <div className="p-4 bg-gray-50 space-y-3">
        <button
          onClick={() => handlePageClick("/contact")}
          className="w-full text-primary font-medium text-sm hover:underline"
        >
          Book a demo
        </button>
        <button
          onClick={() => handleButtonClick("pricing")}
          className="w-full bg-primary text-white py-2.5 rounded-full text-sm font-semibold shadow hover:opacity-95 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
