import React from "react";
import phonesImage from "../../../assets/phonesImage.svg";
interface WorkFasterImageProps {
  className?: string;
}
const WorkFasterImage: React.FC<WorkFasterImageProps> = ({ className }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <img
        src={phonesImage}
        alt="LotLogic mobile preview"
        className="w-full max-w-[380px] md:max-w-[80%] h-auto object-contain drop-shadow-lg"
      />
    </div>
  );
};
export default WorkFasterImage;
