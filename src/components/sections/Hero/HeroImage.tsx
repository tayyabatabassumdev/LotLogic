import React from "react";
import heroImage from "../../../assets/heroImage.png";
export const HeroImage: React.FC = () => {
  return (
    <div className="md:col-span-6 flex justify-center md:justify-end -ml-16">
      <div className="relative w-full max-w-[520px] lg:max-w-[620px] ">
        <img src={heroImage} alt="LotLogic preview" className="w-full h-auto drop-shadow-lg" />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[70%] h-2 rounded-full bg-black opacity-10 blur-md" />
      </div>
    </div>
  );
};
