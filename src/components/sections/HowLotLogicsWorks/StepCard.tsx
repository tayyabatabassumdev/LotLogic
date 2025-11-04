import React from "react";
import type { Step } from "./howLotLogicWorksData";

interface StepCardProps {
  step: Step;
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mb-6">
        <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-white/80 text-sm leading-relaxed max-w-[320px]">{step.description}</p>
    </div>
  );
};

export default StepCard;
