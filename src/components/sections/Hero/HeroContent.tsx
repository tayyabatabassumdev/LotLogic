import React from "react";
export const HeroContent: React.FC = () => {
  return (
    <div className="md:col-span-6 text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        AI-Powered Lot Scanning <br className="hidden sm:block" /> for Auction Teams
      </h1>
      <p className="mt-5 text-base text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed">
        Transform how your team catalogs and prices items. LotLogic uses AI to instantly generate titles,
        descriptions, and estimated values — so your listings go live faster than ever.
      </p>
      <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
        <a
          href="#"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium shadow-md hover:opacity-95 transition text-sm"
        >
          Get Started →
        </a>
      </div>
    </div>
  );
};
