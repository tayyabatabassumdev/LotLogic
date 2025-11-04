import React from "react";
import type { Plan } from "./pricingData";
interface PricingCardProps {
  plan: Plan;
}
const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div
      className={`relative flex flex-col items-center rounded-2xl shadow-md border transition-all duration-300 ${
        plan.highlighted
          ? "bg-primary text-white border-primary scale-105"
          : "bg-white border-[#E2E8F0] hover:shadow-lg hover:-translate-y-1"
      }`}
    >
      {plan.badge && (
        <span className="absolute top-4 right-4 bg-yellow-400 text-xs font-semibold text-dark px-3 py-1 rounded-full">
          {plan.badge}
        </span>
      )}
      <div
        className={`-mt-10 mb-4 w-16 h-16 rounded-full flex items-center justify-center shadow-md ${
          plan.highlighted ? "bg-[#F3F7FF]" : "bg-primary"
        }`}
      >
        <img src={plan.icon} alt={`${plan.name} icon`} className="w-8 h-8" />
      </div>
      <div className="px-6 pb-10 text-center">
        <h3
          className={`text-xl font-semibold mb-2 ${
            plan.highlighted ? "text-white" : "text-dark"
          }`}
        >
          {plan.name}
        </h3>
        <p
          className={`text-sm mb-6 ${
            plan.highlighted ? "text-white/90" : "text-[#475569]"
          }`}
        >
          {plan.description}
        </p>
        <p className="text-4xl font-bold mb-1">{plan.price}</p>
        <p
          className={`text-sm mb-6 ${
            plan.highlighted ? "text-white/80" : "text-[#475569]"
          }`}
        >
          {plan.period}
        </p>
        <button
          className={`w-full py-3 rounded-full font-medium transition-all ${
            plan.highlighted
              ? "bg-white text-primary hover:bg-white/90"
              : "bg-primary text-white hover:bg-primary/90"
          }`}
        >
          {plan.buttonText}
        </button>
        <ul
          className={`mt-8 space-y-3 text-left ${
            plan.highlighted ? "text-white/90" : "text-[#475569]"
          }`}
        >
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className={`font-bold ${
                  plan.highlighted ? "text-white" : "text-primary"
                }`}
              >
                ✓
              </span>
              <span className="text-sm leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PricingCard;
