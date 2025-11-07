import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo: React.FC = () => {
    return(
    <div className="bg-primary text-white p-8 md:p-10 rounded-xl flex flex-col justify-center shadow-md">
        <h3 className="text-2xl font-semibold mb-10">Contact Information</h3>
        <ul className="space-y-6 text-white/90">
            <li className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-md">
                    <Phone className="w-5 h-5" />
                </div>
                <span>Not Available yet</span>
            </li>

            <li className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-md">
                    <Mail className="w-5 h-5" />
                </div>
                <span>support@getlotlogic.com</span>
            </li>

            <li className="flex items-start gap-4">
                <div className="bg-white/20 p-2 rounded-md">
                    <MapPin className="w-5 h-5 mt-0.5" />
                </div>
                <span className="leading-snug">
                    132 Dartmouth Street Boston, <br />
                    Massachusetts 02156 United States
                </span>
            </li>
        </ul>
    </div>
  );
};

export default ContactInfo;
