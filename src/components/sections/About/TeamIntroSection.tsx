import React from "react";
import Right from "../../../assets/Right.svg";
export default function TeamIntroSection(): React.ReactElement {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our team
          </h2>
          <div className="flex justify-center mb-6">
            <div
              className="h-1 w-12"
              style={{ backgroundColor: "#3F72B8" }}
            ></div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the passionate minds behind LotLogic — a dedicated group of
            product innovators, engineers, and AI specialists building smarter
            tools for auction teams worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          <div className="flex flex-col space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Founded with the vision to modernize lot cataloging, our team
              brings together expertise in AI automation, software design, and
              marketplace technology. What began as a small experiment to
              simplify item listings has evolved into a powerful SaaS platform
              trusted by auction houses, resellers, and teams across industries.
            </p>
            <p>
              We believe in blending technology with human insight. Every
              feature we design — from AI description generation to real-time
              collaboration — reflects our commitment to making work faster,
              simpler, and more rewarding for teams everywhere.
            </p>
            <p>
              LotLogic continues to grow through innovation, integrity, and
              teamwork — values that shape not only our product but the people
              behind it.
            </p>
          </div>
            <img src={Right} alt="" className="mx-auto max-w-[70%]" />
        </div> 
      </div>
    </section>
  );
}
