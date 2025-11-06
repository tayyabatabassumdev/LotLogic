import React from "react";
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}
const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300-  ${
        isOpen ? "bg-blue-50 shadow-md" : "bg-gray-50"
      }`}
    >
      <button
        onClick={onToggle}
        className="cursor-pointer w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 hover:text-blue-600"
      >
        <span>{question}</span>
        <span className="text-xl transition-transform duration-300">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 border-t border-gray-200" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-4 pt-2 text-gray-600 text-sm">{answer}</p>
      </div>
    </div>
  );
};
export default FAQItem;
