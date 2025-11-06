import React from "react";
import { stepsData } from "./howLotLogicWorksData";
import StepCard from "./StepCard";
const HowLotLogicWorksSection: React.FC = () => {
  return (
    <section className="w-full bg-linear-to-b from-[#0A1F47] to-primary text-white py-20 md:py-22">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How LotLogic Works</h2>
        <p className="text-white/80 max-w-[680px] mx-auto mb-16 text-sm md:text-base leading-relaxed">
          Experience a seamless AI-powered process that takes your lot cataloging from photos
          to publish-ready listings — all in just a few simple steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stepsData.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowLotLogicWorksSection;
