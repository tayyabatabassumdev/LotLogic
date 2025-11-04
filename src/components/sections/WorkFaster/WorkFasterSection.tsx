import React from "react";
import WorkFasterImage from "./WorkFasterImage";
import WorkFasterContent from "./WorkFasterContent";
const WorkFasterSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="md:hidden flex flex-col gap-10">
          <WorkFasterContent align="center" headingSize="sm" />
          <WorkFasterImage />
        </div>
        <div className="hidden md:grid grid-cols-2 items-center gap-12 lg:gap-16">
          <WorkFasterImage className="lg:justify-start" />
          <WorkFasterContent align="left" headingSize="lg" />
        </div>
      </div>
    </section>
  );
};
export default WorkFasterSection;
