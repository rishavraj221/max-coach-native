import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Alert } from "react-native";

import OTPInput from "../components/OTPInput";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import Button from "../components/Button";
import useAuth from "../auth/useAuth";
import { showErrorToast, showSuccessToast } from "../components/Toast";
import { verifyOTP } from "../api/otp";

const OTPScreen = ({ route, navigation }) => {
  const auth = useAuth();
  const [otp, setOTP] = useState("");

  const { phone_number, Details } = route.params;

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 4) return showErrorToast("OTP incorrect");
    try {
      showSuccessToast("Verifying OTP...");
      const result = await verifyOTP(phone_number, Details, otp);

      if (
        result.data &&
        result.data.message &&
        result.data.message === "Coach not registered"
      )
        return showErrorToast(
          "Coach not registered, please register yourself first"
        );
      if (result.data && result.data.Details === "OTP Mismatch")
        return showErrorToast("Incorrect OTP");
      if (!result.ok) return showErrorToast("Something went wrong");
      showSuccessToast("OTP verification successful");
      auth.logIn(result.data.token);
    } catch (ex) {
      showErrorToast(ex.message);
    }
  };

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <AppText style={styles.welcome}>OTP Authentication</AppText>
          <AppText style={styles.welcome_desc}>
            An authentication code has been sent to (+91){" "}
            {phone_number.substr(0, 4) +
              " " +
              phone_number.substr(4, 3) +
              " " +
              phone_number.substr(7, 3)}
          </AppText>
          <View style={styles.otpInput}>
            <OTPInput getOTPStr={(otpStr) => setOTP(otpStr)} />
          </View>
          <View
            style={{ marginTop: "40%", width: "100%", alignItems: "center" }}
          >
            <View style={styles.resendOTP}>
              <AppText style={styles.resendSMS}>Resend sms</AppText>
              <AppText style={styles.or}>or</AppText>
              <AppText style={styles.getACall}>Get a Call</AppText>
            </View>
            <Button
              width="90%"
              title="Continue"
              disabled={otp.length !== 4}
              onPress={handleVerifyOTP}
            ></Button>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 40,
    textAlign: "center",
    marginTop: "25%",
  },
  welcome_desc: {
    fontWeight: "500",
    color: "#171717",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.4,
    textAlign: "center",
    opacity: 0.6,
    width: "70%",
  },
  otpInput: {
    marginTop: 28,
  },
  resendOTP: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  resendSMS: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#e02828",
  },
  or: {
    fontFamily: "Roboto",
    fontSize: 17,
    color: "#999999",
  },
  getACall: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#444444",
  },
});

export default OTPScreen;
