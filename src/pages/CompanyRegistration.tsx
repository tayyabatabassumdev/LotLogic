import React, { useState } from "react";
import CompanyForm from "../components/sections/Register/CompanyForm";
import RegistrationImage from "../components/sections/Register/RegistrationImage";
import RegistrationModal from "../components/sections/Register/RegistrationModal";

const CompanyRegistration: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    bio: "",
    agreedToTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <RegistrationModal show={showModal} onClose={() => setShowModal(false)} />

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
          <RegistrationImage />
          <CompanyForm
            formData={formData}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyRegistration;
