import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../components/Text";
import Screen from "../components/Screen";

const NotificationsScreen = () => {
  return (
    <Screen>
      <AppText style={styles.text}>Notifications Screen</AppText>
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

export default NotificationsScreen;
