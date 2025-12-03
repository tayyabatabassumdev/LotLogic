import { create } from "zustand";
import { registerCompany } from "../services/companyRegister.service";
import type { CompanyFormData } from "../types/company";
type FieldErrors = Partial<Record<keyof CompanyFormData, string>>;
interface CompanyStoreState {
  formData: CompanyFormData;
  errors: FieldErrors;
  isSubmitting: boolean;
  apiError?: string;
  apiSuccess?: string;
  bio?: string;
  setField: (
    name: keyof CompanyFormData,
    value: string | boolean | File | null
  ) => void;
  setLogo: (file: File | null) => void;
  validate: () => boolean;
  submit: () => Promise<boolean>;
  resetMessages: () => void;
}
const initialForm: CompanyFormData = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  phone: "",
  bio: "",
  agreedToTerms: false,
  logo: null,
  companyName: "",
  password: "",
};
export const useCompanyStore = create<CompanyStoreState>((set, get) => ({
  formData: initialForm,
  errors: {},
  isSubmitting: false,
  apiError: undefined,
  apiSuccess: undefined,
  setField: (name, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
      errors: {
        ...state.errors,
        [name]: "",
      },
    })),
  setLogo: (file) =>
    set((state) => ({
      formData: {
        ...state.formData,
        logo: file,
      },
    })),
  validate: () => {
    const { formData } = get();
    const errors: FieldErrors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }
    if (!formData.agreedToTerms) {
      errors.agreedToTerms = "You must agree to the terms";
    }
    set({ errors });
    return Object.keys(errors).length === 0;
  },
  submit: async () => {
    const { formData, validate } = get();
    const isValid = validate();
    if (!isValid) return false;
    set({ isSubmitting: true, apiError: undefined, apiSuccess: undefined });
    try {
      const payload = {
        fullName: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        password: formData.password,
        companyName: formData.companyName,
        phoneNumber: formData.phone,
        bio: formData.bio,
        address: formData.address,
      };
      await registerCompany(payload);
      set({
        apiSuccess: "Company registered successfully.",
        apiError: undefined,
        isSubmitting: false,
      });
      return true;
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to register company";
      set({
        apiError: message,
        apiSuccess: undefined,
        isSubmitting: false,
      });
      return false;
    }
  },
  resetMessages: () => set({ apiError: undefined, apiSuccess: undefined }),
}));
