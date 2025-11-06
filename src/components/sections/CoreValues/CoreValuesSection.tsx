import { coreValuesdata } from "../CoreValues/coreValuesdata";
import FeatureCard from "../Features/FeatureCard";
const CoreValuesSection = () => {
  return (
    <section
      className="w-full py-20 md:py-22 bg-[#EAF3FFB2] flex items-center justify-center"
      style={{ minHeight: "588px" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
          Our Core <span className="text-primary"> Values</span>
        </h2>
        <div className="flex justify-center mb-6">
            <div
              className="h-1 w-12"
              style={{ backgroundColor: "#3F72B8" }}
            ></div>
          </div>
        <p className="text-[#475569] text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-14">
          Discover the foundation that drives LotLogic — a platform built to
          empower auction teams with innovation, accuracy, and collaboration at
          every step.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 md:gap-y-20">
          {coreValuesdata.map((value, index) => (
            <FeatureCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
