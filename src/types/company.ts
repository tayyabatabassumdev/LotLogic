export interface CompanyFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  bio: string;
  agreedToTerms: boolean;
  logo?: File | null;
  error?: string;
  companyName: string;
  password: string;
}
export interface RegisterCompanyPayload {
  fullName: string;
  email: string;
  password: string;
  companyName: string;
  bio: string;
  phoneNumber: string;
  address: string;
}

export interface ApiError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}

export type CompanyFormErrors = Partial<Record<keyof CompanyFormData, string>>;
