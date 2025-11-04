import React from "react";
const PricingHeader: React.FC = () => {
  return (
    <div className="text-center max-w-[680px] mx-auto mb-20">
      <span className="text-xs md:text-sm bg-[#EAF3FFB2] text-[#334155] px-4 py-1.5 rounded-full font-medium mb-6 inline-block">
        GET STARTED TODAY — YOUR PLANS, YOUR WAY.
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 leading-tight">
        Find the <span className="text-primary">Right Plan</span> that fits <br /> your team’s workflow.
      </h2>
      <p className="text-[#475569]">
        Whether you’re testing AI-powered cataloging or managing hundreds of
        lots, LotLogic scales with your business.
      </p>
    </div>
  );
};
export default PricingHeader;
