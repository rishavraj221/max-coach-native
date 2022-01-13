import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../components/Text";
import Screen from "../components/Screen";
import Button from "../components/Button";
import useAuth from "../auth/useAuth";

const ProfileScreen = () => {
  const auth = useAuth();
  return (
    <Screen>
      <AppText style={styles.text}>Profile Screen</AppText>
      <AppText style={styles.text}>{auth.user.name}</AppText>
      <AppText style={styles.text}>{auth.user.mobile_number}</AppText>
      <AppText style={styles.text}>{auth.user.email}</AppText>
      <Button title="Log out" onPress={auth.logOut} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
