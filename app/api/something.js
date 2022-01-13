// import { apiClient, verifyOTPapi } from "./client";
import { create } from "apisauce";

const verifyOTPapi = (headers) =>
  create({
    baseURL: "https://test.copters.in",
    headers,
  });

const endPoint = "/otp";

const sendOTP = (tel_number) =>
  apiClient.post(`${endPoint}/send`, { tel_number, channel: "sms" });

const verifyOTP = () =>
  verifyOTPapi({
    "Auth-Key": "N6P7R9S2K4M5N7Q8R9B2J3K4M6P7Q8S2J3M5N6P8R9S2K4M5N7Q8R9T2J3K4=",
    "Client-Service": "mobile-client",
  }).post(`/v1/public/auth/login`, {
    mobilenumber: "8668951865",
    userpin: "818504",
    usertype: "Collector",
  });

export { verifyOTP };
