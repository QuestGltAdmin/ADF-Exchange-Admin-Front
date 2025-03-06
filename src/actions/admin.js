import axiosMain from "../http/axios/axios_main";
import { errorHandler } from "./error-handler";

export const login = errorHandler(async (email, password) => {
  const response = await axiosMain.post("/admin/login", { email, password });

  return response;
});

export const verifyOtp = errorHandler(async (email, otp) => {
  const response = await axiosMain.post("/admin/verify/login", { email, otp });

  return response;
});

export const resendOtp = errorHandler(async (email) => {
  const response = await axiosMain.post("/admin/resend-otp", { email });

  return response;
});
