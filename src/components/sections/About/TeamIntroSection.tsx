import React from "react";

export default function TeamIntroSection(): React.ReactElement {
  return (
    <section className="bg-white py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Meet Our Team
        </h2>
        <div className="flex justify-center mb-8">
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Discover the passionate minds behind LotLogic — a dedicated group of
          product innovators, engineers, and AI specialists building smarter
          tools for auction teams worldwide.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
        <p className="border-l-4 border-primary pl-4 text-gray-800">
          Founded with the vision to modernize lot cataloging, our team brings
          together expertise in AI automation, software design, and marketplace
          technology. What began as a small experiment to simplify item listings
          has evolved into a powerful SaaS platform trusted by auction houses,
          resellers, and teams across industries.
        </p>

       <p className="border-l-4 border-primary pl-4 text-gray-800">
          We believe in blending technology with human insight. Every feature we
          design — from AI description generation to real-time collaboration —
          reflects our commitment to making work faster, simpler, and more
          rewarding for teams everywhere.
        </p>

        <p className="border-l-4 border-primary pl-4 text-gray-800">
          LotLogic continues to grow through innovation, integrity, and
          teamwork — values that shape not only our product but the people
          behind it. Our journey is driven by curiosity, purpose, and a shared
          mission to build solutions that truly make a difference.
        </p>
      </div>
    </section>
  );
}
