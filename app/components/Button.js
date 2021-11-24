import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function AppButton({ title, width = "100%", onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[disabled ? "disabled" : "primary"], width },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
