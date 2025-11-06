import React from "react";
import {cards} from "./missionSectionData"
const MissionSection: React.FC = () => {
  return (
    <section className="bg-[#F9FBFF] mt-10 py-20 px-6 md:px-10 " id="mission">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col text-center md:flex-row md:items-center justify-between gap-8 mb-16 md:text-justify">
          <div>
            <span className="text-xs md:text-sm bg-[#EAF3FFB2] text-[#334155] px-4 py-1 rounded-full font-medium inline-block mb-4">
              OUR MISSION
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold md:text-left text-primary">
              Powerful Capabilities<span className="text-dark">That
              Drive Efficiency</span>
            </h2>
          </div>
          <p className="text-[#565656] max-w-md text-sm md:text-lg leading-relaxed">
            Our mission is simple: simplify the lot management process. We built
            LotLogic to replace manual cataloging with an automated, AI-driven
            workflow that saves time, reduces errors, and keeps every team
            connected in real time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-linear-to-b from-white to-[#f9fbff] rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 text-left"
            >
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full border border-dark">
        <img 
          src={card.icon} 
          alt={card.title}
          className="w-8 h-8"
        />
      </div>
              <h3 className="text-lg font-semibold text-dark mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
