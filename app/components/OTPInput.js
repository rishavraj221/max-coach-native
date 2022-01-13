import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const OTPTextInputComponent = ({ getOTPStr }) => {
  const [tp1, setTP1] = useState(null);
  const [tp2, setTP2] = useState(null);
  const [tp3, setTP3] = useState(null);
  const [tp4, setTP4] = useState(null);

  const [otp, setOTP] = useState(["", "", "", ""]);
  const [otpStr, setOTPStr] = useState("");

  useEffect(() => {
    if (typeof getOTPStr === "function") getOTPStr(otpStr);
  }, [otpStr]);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(dig1) => {
          const temp = otp;
          temp[0] = dig1;
          setOTP(temp);
          setOTPStr(temp.join(""));
          if (dig1) tp2.focus();
        }}
        style={[
          styles.input,
          {
            borderBottomColor: otp[0]
              ? "rgba(23,23,23,0.2)"
              : "rgba(143, 146, 161, 0.2)",
          },
        ]}
        maxLength={1}
        textAlign="center"
        ref={(input) => setTP1(input)}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        onChangeText={(dig2) => {
          const temp = otp;
          temp[1] = dig2;
          setOTP(temp);
          setOTPStr(temp.join(""));
          if (dig2) tp3.focus();
        }}
        style={[
          styles.input,
          {
            borderBottomColor: otp[1]
              ? "rgba(23,23,23,0.2)"
              : "rgba(143, 146, 161, 0.2)",
          },
        ]}
        maxLength={1}
        textAlign="center"
        ref={(input) => setTP2(input)}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace") {
            tp1.focus();
          }
        }}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        onChangeText={(dig3) => {
          const temp = otp;
          temp[2] = dig3;
          setOTP(temp);
          setOTPStr(temp.join(""));
          if (dig3) tp4.focus();
        }}
        style={[
          styles.input,
          {
            borderBottomColor: otp[2]
              ? "rgba(23,23,23,0.2)"
              : "rgba(143, 146, 161, 0.2)",
          },
        ]}
        maxLength={1}
        textAlign="center"
        ref={(input) => setTP3(input)}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace") {
            tp2.focus();
          }
        }}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        onChangeText={(dig4) => {
          const temp = otp;
          temp[3] = dig4;
          setOTP(temp);
          setOTPStr(temp.join(""));
        }}
        style={[
          styles.input,
          {
            borderBottomColor: otp[3]
              ? "rgba(23,23,23,0.2)"
              : "rgba(143, 146, 161, 0.2)",
          },
        ]}
        maxLength={1}
        textAlign="center"
        ref={(input) => setTP4(input)}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace") {
            tp3.focus();
          }
        }}
        keyboardType="numeric"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    height: 60,
    margin: 10,
    width: 65,
    padding: 10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 2,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default OTPTextInputComponent;
