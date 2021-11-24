import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";

import LoginScreen from "./app/screens/Login";

LogBox.ignoreLogs(["Remote debugger"]);

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
