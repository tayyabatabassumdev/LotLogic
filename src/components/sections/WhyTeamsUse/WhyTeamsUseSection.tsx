import React from "react";
import StepItem from "./StepItem";
import { steps } from "./stepsData";
const WhyTeamsUseSection: React.FC = () => {
  return (
    <section className="w-full bg-[#EAF3FFB2] py-20 md:py-22">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <div className="flex flex-col justify-center items-center md:items-start">
          <span className="text-sm md:text-base bg-white/60 text-[#334155] px-4 py-1.5 rounded-full font-medium w-fit mb-5 shadow-sm">
            HOW LOTLOGIC WORKS
          </span>
          <h2 className=" text-center text-3xl md:text-4xl font-bold text-dark leading-snug md:text-left">
            Why Teams Use <br />
            <span className="text-primary">LotLogic</span>
          </h2>
        </div>
        <div className="relative flex flex-col gap-12">
          {steps.map((step, index) => (
            <StepItem
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyTeamsUseSection;
