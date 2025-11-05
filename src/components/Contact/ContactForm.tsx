import React from "react";
const ContactForm: React.FC = () => {
  return (
    <form
          className="bg-white p-8 md:p-10 rounded-xl shadow-sm space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-primary font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                className="border-b border-gray-300 focus:border- outline-none py-1 text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-primary font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="border-b border-gray-300 focus:border-primary outline-none py-1 text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-primary font-medium mb-1">Email</label>
              <input
                type="email"
                className="border-b border-gray-300 focus:border-primary outline-none py-1 text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-primary font-medium mb-1">
                Phone Number
              </label>
              <input
                type="text"
                className="border-b border-gray-300 focus:border-primary outline-none py-1 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-primary font-medium mb-1">Message</label>
            <textarea
              rows={1}
              className="border-b border-gray-300 focus:border-primary outline-none py-1 text-sm resize-none"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="bg-primary text-white px-8 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </form>
  );
};

export default ContactForm;
