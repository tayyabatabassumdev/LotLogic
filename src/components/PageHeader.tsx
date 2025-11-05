import React from "react";


interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ badge, title, subtitle }) => {
  return (
    <>
      {badge && (
        <div className="text-center max-w-[680px] mx-auto mt-12">
          <span className="text-xs md:text-sm bg-[#EAF3FFB2] text-[#334155] px-4 rounded-full font-medium mb-6 inline-block">
            {badge}
          </span>
        </div>
      )}

      <section className=" border-gray-100 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-4">
          {title.split(" ")[0]}{" "}
          <span className="text-dark">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      </section>
    </>
  );
};

export default PageHeader;
