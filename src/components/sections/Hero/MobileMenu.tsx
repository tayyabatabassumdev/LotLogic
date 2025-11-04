import React from "react";
const navLinks = ["Home", "About", "Pricing", "How it works", "Contact"];
export const MobileMenu: React.FC = () => {
  return (
    <div className="md:hidden mt-3 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden max-w-[1200px] mx-auto px-4">
      <ul className="flex flex-col text-gray-800 font-medium">
        {navLinks.map((link) => (
          <li
            key={link}
            className="px-6 py-3 border-b border-gray-100 hover:bg-gray-50 hover:text-primary transition cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
      <div className="p-4 bg-gray-50 space-y-3">
        <button className="w-full text-primary font-medium text-sm hover:underline">
          Book a demo
        </button>
        <button className="w-full bg-primary text-white py-2.5 rounded-full text-sm font-semibold shadow hover:opacity-95 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};
