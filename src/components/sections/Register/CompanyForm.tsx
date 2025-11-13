import React from "react";
import FormInput from "../../FormInput";
import FileUpload from "../../FileUpload";

interface CompanyFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  bio: string;
  agreedToTerms: boolean;
}
interface CompanyFormProps {
  formData: CompanyFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ formData, onChange, onSubmit }) => (
  <div className="lg:w-1/2 p-8 lg:p-12">
    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
      Register as a Company
    </h1>

    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          placeholder="First Name"
        />
        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          placeholder="Last Name"
        />
      </div>

      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={onChange}
        placeholder="you@example.org"
      />

      <FormInput
        label="Address"
        name="address"
        value={formData.address}
        onChange={onChange}
        placeholder="Enter your address"
      />

      <FormInput
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={onChange}
        placeholder="Enter your phone number"
      />

      <FormInput
        label="Bio"
        name="bio"
        value={formData.bio}
        onChange={onChange}
        isTextArea
        placeholder="Enter your description"
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
          <a href="#" className="text-primary hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>

      <FileUpload label="Upload Company Logo" />

      <button
        onClick={onSubmit}
        className="w-full bg-primary hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 text-sm"
      >
        Register
      </button>
    </div>
  </div>
);

export default CompanyForm;
