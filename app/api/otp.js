import { apiClient, clientWithHeaders } from "./client";

const endPoint = "/otp";

const sendOTP = (tel_number) =>
  apiClient.post(`${endPoint}/send`, { tel_number, channel: "sms" });

const verifyOTP = (tel_number, session_id, code) =>
  clientWithHeaders({
    session_id,
  }).post(`${endPoint}/verify`, {
    tel_number,
    code,
    channel: "sms",
    access: "coach",
  });

export { sendOTP, verifyOTP };
