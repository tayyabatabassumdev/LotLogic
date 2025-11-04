import React from "react";
import { plans } from "./pricingData";
import PricingHeader from "./PricingHeader";
import PricingCard from "./PricingCard";
const PricingSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 md:py-22">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <PricingHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
