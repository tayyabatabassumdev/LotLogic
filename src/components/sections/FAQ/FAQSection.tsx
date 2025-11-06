import React, { useState } from "react";
import FAQItem from "./FAQItem";
import { faqData } from "./faqData";
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className="w-full bg-white py-20 md:py-22">
      <div className="max-w-[800px] mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Have questions? Look here
        </h2>
        <div className="flex justify-center mb-6">
            <div
              className="h-1 w-12"
              style={{ backgroundColor: "#3F72B8" }}
            ></div>
          </div>
        <p className="text-gray-500 text-sm md:text-base max-w-[600px] mx-auto mb-12">
          Find answers to the most common questions, covering everything from setup to advanced features,
          to help you get the most out of the platform.
        </p>
        <div className="space-y-3 text-left">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
