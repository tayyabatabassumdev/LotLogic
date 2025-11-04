import React from "react";
import dividerImage from "../../../assets/Divider.svg";
interface StepItemProps {
  number: string;
  title: string;
  description: string;
  isLast: boolean;
}
const StepItem: React.FC<StepItemProps> = ({ number, title, description, isLast }) => {
  return (
    <div className="relative flex items-start gap-6">
      <div className="relative shrink-0 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-[#3F72B8] font-semibold bg-white shadow-sm z-10">
          {number}
        </div>
        {!isLast && (
          <img
            src={dividerImage}
            alt="Divider"
            className="absolute top-[52px] w-0.5 h-[120px] hidden md:block"
            style={{ transform: "translateY(0%)" }}
          />
        )}
      </div>
      <div className="mt-1">
        <h3 className="text-lg md:text-xl font-semibold text-dark mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-[#475569] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
export default StepItem;
