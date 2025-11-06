import React from "react";
import teamImage from "../../../assets/team.svg"; 
const TeamSection: React.FC = () => {
  return (
    <section className="bg-white py-14 px-6 md:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto">  
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-full lg:w-7/12 xl:w-8/12 shadow-xl rounded-lg overflow-hidden relative z-10">
            <img
              src={teamImage}
              alt="Team collaboration"
              className="w-full h-96 md:h-[480px] object-cover"
            />
          </div>
          <div className={`w-full lg:w-6/12 xl:w-5/12 bg-primary text-white p-8 md:p-10 shadow-2xl rounded-lg mt-8 lg:mt-0 lg:-ml-12 xl:-ml-24 z-20 lg:translate-y-1/6`}>  
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug text-left">
              SIMPLIFYING WORK FOR REAL TEAMS
            </h2>
            <p className="text-base leading-relaxed opacity-90">
              At LotLogic, we understand that cataloging isn’t just data — it’s teamwork, deadlines, and precision. That’s why we built a platform that turns repetitive listing tasks into one seamless, automated flow. From the first photo to the final export, we help your team save hours every day and stay focused on what matters most — results.
            </p>
          </div>  
        </div>
      </div>
    </section>
  );
};
export default TeamSection;