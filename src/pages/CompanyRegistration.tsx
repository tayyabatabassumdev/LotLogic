import React, { useEffect, useState } from "react";
import CompanyForm from "../components/sections/Register/CompanyForm";
import RegistrationImage from "../components/sections/Register/RegistrationImage";
import RegistrationModal from "../components/sections/Register/RegistrationModal";
import { useCompanyStore } from "../store/useCompanyStore";
import toast from "react-hot-toast";
const CompanyRegistration: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    formData,
    errors,
    isSubmitting,
    apiError,
    apiSuccess,
    setField,
    setLogo,
    submit,
    resetMessages,
  } = useCompanyStore();
  useEffect(() => {
    if (apiError) toast.error(apiError);
    if (apiSuccess) toast.success(apiSuccess);
  }, [apiError, apiSuccess]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const fieldName = name as keyof typeof formData;
    if (type === "checkbox") {
      setField(fieldName, checked);
    } else {
      setField(fieldName, value);
    }
    resetMessages();
  };
  const handleFileChange = (file: File | null) => {
    setLogo(file);
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const ok = await submit();
    if (ok) setShowModal(true);
  };
  return (
    <>
      <RegistrationModal show={showModal} onClose={() => setShowModal(false)} />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
          <RegistrationImage />
          <div className="flex-1 p-6">
            <CompanyForm
              formData={formData}
              errors={errors}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onFileChange={handleFileChange}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CompanyRegistration;
