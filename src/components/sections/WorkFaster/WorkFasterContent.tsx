import React from "react";
import checkIcon from "../../../assets/checkIcon.svg";
import { points } from "./pointsData";
interface WorkFasterContentProps {
  align?: "center" | "left";
  headingSize?: "sm" | "lg";
}
const WorkFasterContent: React.FC<WorkFasterContentProps> = ({
  align = "left",
  headingSize = "lg",
}) => {
  const headingClass =
    headingSize === "sm"
      ? "text-3xl sm:text-4xl mb-6"
      : "text-3xl lg:text-4xl mb-8";
  return (
    <div
      className={
        align === "center" ? "text-center px-2" : "flex flex-col justify-center"
      }
    >
      <h2 className={`${headingClass} font-bold text-[#222222] leading-tight`}>
        Work faster with <br className="hidden sm:block" /> powerful tool.
      </h2>
      <ul
        className={`space-y-4 ${
          align === "center" ? "text-left max-w-xl mx-auto" : "space-y-5"
        }`}
      >
        {points.map((text, index) => (
          <li
            key={index}
            className={`flex items-start gap-3 text-[#212529] ${
              align === "center" ? "text-sm" : "text-base"
            } leading-relaxed`}
          >
            <img
              src={checkIcon}
              alt="check"
              className="w-5 h-5 mt-0.5 shrink-0"
            />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkFasterContent;
