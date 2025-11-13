import React from "react";
import register from "../../../assets/register.jpg";

const RegistrationImage: React.FC = () => (
  <div className="lg:w-1/2 relative h-64 lg:h-auto">
    <img
      src={register}
      alt="Registration banner"
      className="w-full h-full object-cover"
    />
  </div>
);

export default RegistrationImage;
