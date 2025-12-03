import React, { useRef, useState } from "react";
import FormInput from "../../FormInput";
import type { CompanyFormData } from "../../../types/company";
interface CompanyFormProps {
  formData: CompanyFormData;
  errors: Partial<Record<keyof CompanyFormData, string>>;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onFileChange?: (file: File | null) => void;
  isSubmitting?: boolean;
}
const CompanyForm: React.FC<CompanyFormProps> = ({
  formData,
  errors,
  onChange,
  onSubmit,
  onFileChange,
  isSubmitting,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");
  const [uploadError, setUploadError] = useState<string>("");
  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "application/pdf",
      "application/msword",
    ];
    if (!validTypes.includes(file.type)) {
      setUploadError(
        "Please upload a valid file (JPG, PNG, GIF, WebP, PDF, DOC)"
      );
      setUploadedFileName("");
      return;
    }
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setUploadError("File size must be less than 10MB");
      setUploadedFileName("");
      return;
    }
    setUploadError("");
    setUploadedFileName(file.name);
    if (onFileChange) {
      onFileChange(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div className=" p-4">
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
        Register as a Company
      </h1>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-0">
          <FormInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            placeholder="First Name"
            error={errors.firstName}
          />
          <FormInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            placeholder="Last Name"
            error={errors.lastName}
          />
        </div>
        <FormInput
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={onChange}
          placeholder="Your company name"
          error={errors.companyName}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          placeholder="you@example.org"
          error={errors.email}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Create a password"
          error={errors.password}
        />

        <FormInput
          label="Address"
          name="address"
          value={formData.address}
          onChange={onChange}
          placeholder="Enter your address"
          error={errors.address}
        />
        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={onChange}
          placeholder="Enter your phone number"
          error={errors.phone}
        />
        <FormInput
          label="Bio"
          name="bio"
          value={formData.bio}
          onChange={onChange}
          isTextArea
          placeholder="Enter your description"
          error={errors.bio}
        />
        <div className="flex items-start">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={onChange}
            className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label className="ml-2 text-sm text-gray-600">
            I agree to the{" "}
            <a
              href="/termsandconditions"
              className="text-primary hover:underline"
            >
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacypolicy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>
        {errors.agreedToTerms && (
          <p className="text-xs text-red-600 mt-1">{errors.agreedToTerms}</p>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Company Logo
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/gif,image/webp,application/pdf,application/msword"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={handleFileUploadClick}
            className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary hover:bg-primary/5 transition-colors duration-200"
          >
            <div className="text-gray-600">
              <p className="font-medium">Click to upload</p>
              <p className="text-xs text-gray-500 mt-1">
                JPG, PNG, GIF, WebP, PDF, DOC up to 10MB
              </p>
            </div>
          </button>
          {uploadedFileName && (
            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-medium text-green-800">
                File uploaded
              </p>
              <p className="text-xs text-green-600 mt-1">{uploadedFileName}</p>
            </div>
          )}
          {uploadError && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm font-medium text-red-800">{uploadError}</p>
            </div>
          )}
        </div>
        <button
          onClick={onSubmit}
          type="button"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 text-sm"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
};
export default CompanyForm;
