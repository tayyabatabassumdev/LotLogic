import React from "react";
import type { Feature } from "./featuresData";
const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 hover:scale-[1.03] transition-transform duration-300">
      <img src={icon} alt={title} className="w-10 h-10 md:w-12 md:h-12" />
      <h3 className="font-semibold text-dark text-lg md:text-xl">
        {title}
      </h3>
      <p className="text-[#475569] text-sm leading-relaxed max-w-[260px]">
        {description}
      </p>
    </div>
  );
};
export default FeatureCard;
