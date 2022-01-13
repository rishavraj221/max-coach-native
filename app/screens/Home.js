import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../components/Text";
import Screen from "../components/Screen";

const HomeScreen = () => {
  return (
    <Screen>
      <AppText style={styles.text}>Home Screen</AppText>
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
