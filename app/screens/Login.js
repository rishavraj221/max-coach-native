import React from "react";
import { StyleSheet, View, ScrollView, Alert } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import _ from "lodash";

import Screen from "../components/Screen";
import AppText from "../components/Text";
import PTSVG from "../assets/Illustrations/personal_trainer";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import { sendOTP } from "../api/otp";
import routes from "../navigation/routes";
import { showErrorToast, showSuccessToast } from "../components/Toast";

const validationSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required("")
    .length(10, "Please enter a valid mobile number")
    .label("Mobile Number"),
});

const LoginScreen = ({ navigation }) => {
  const handleSubmit = async (something) => {
    try {
      showSuccessToast(
        "Sending OTP to " + "+91-" + something.phone_number + "..."
      );
      const result = await sendOTP(something.phone_number);

      if (!result.ok || !result.data.Details)
        return showErrorToast(result.originalError.message);
      showSuccessToast("OTP sent successful");
      navigation.navigate(routes.OTP_INPUT_SCREEN, {
        Details: result.data.Details,
        phone_number: something.phone_number,
      });
    } catch (ex) {
      showErrorToast(ex.message);
    }
  };

  return (
    <Screen>
      <ScrollView>
        <AppText style={styles.welcome}>Welcome Coach</AppText>
        <AppText style={styles.welcome_desc}>Sign in to your account</AppText>
        <PTSVG style={styles.ptsvg} />
        <View style={styles.form}>
          <Formik
            initialValues={{ phone_number: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors }) => (
              <View>
                <AppFormField
                  phoneInput={true}
                  autoCorrect={false}
                  keyboardType="numeric"
                  name="phone_number"
                  placeholder="Your Mobile Number"
                />
                <AppText style={styles.formDesc}>
                  We will send you OTP on this number
                </AppText>
                <View style={styles.submitBtn}>
                  <SubmitButton
                    title="Send OTP"
                    disabled={!_.isEmpty(errors)}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
        <AppText style={styles.applyContainer}>
          <AppText>Don't have an account? </AppText>
          <AppText style={{ color: "#E02828" }}>Apply to be a Coach</AppText>
        </AppText>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 40,
    textAlign: "center",
    marginTop: "25%",
  },
  welcome_desc: {
    fontWeight: "500",
    color: "#171717",
    fontSize: 16,
    letterSpacing: -0.4,
    textAlign: "center",
    opacity: 0.6,
  },
  ptsvg: {
    alignItems: "center",
    marginTop: 70,
  },
  form: {
    marginTop: "30%",
    marginHorizontal: 20,
  },
  formDesc: {
    color: "#a2a0a0",
    fontSize: 14,
  },
  submitBtn: {
    marginTop: 40,
  },
  applyContainer: {
    textAlign: "center",
    marginTop: 50,
  },
});

export default LoginScreen;
