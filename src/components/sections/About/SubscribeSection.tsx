import React from "react";
import { ArrowRight } from "lucide-react";
const SubscribeSection: React.FC = () => {
  return (
    <section className="bg-[#EAF2FF] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="200"
            viewBox="0 0 500 200"
            fill="none"
          >
            <pattern
              id="dots"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#000" />
            </pattern>
            <rect width="500" height="200" fill="url(#dots)" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative z-10">
          Subscribe to get updates
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 relative z-10">
          Stay in the loop! Subscribe now to receive the latest news, updates,
          and exclusive offers from this app directly to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-center justify-center gap-4 relative z-10 w-full"
        >
          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full bg-white md:w-[70%] px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full md:w-[70%] bg-primary text-white font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-20"
          >
            Subscribe <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};
export default SubscribeSection;
