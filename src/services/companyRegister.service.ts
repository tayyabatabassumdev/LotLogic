import axios from "axios";
import type { RegisterCompanyPayload } from "../types/company";
const BASE_URL = "http://209.105.243.7:6061/v1/api";
export const registerCompany = async (payload: RegisterCompanyPayload) => {
  const url = `${BASE_URL}/user/register-company`;
  const response = await axios.post(url, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
