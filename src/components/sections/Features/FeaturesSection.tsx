import React from "react";
import { featuresData } from "./featuresData";
import FeatureCard from "./FeatureCard";
const FeaturesSection: React.FC = () => {
  return (
    <section
      className="w-full py-20 md:py-22 bg-[#EAF3FFB2] flex items-center justify-center"
      style={{ minHeight: "588px" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
          Explore Powerful Features
        </h2>
        <p className="text-[#475569] text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-14">
          Discover the intelligent tools that make LotLogic the go-to AI platform for auction teams —
          built for speed, accuracy, and effortless collaboration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 md:gap-y-20">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
