import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "./Text";

function MyClients({ focused }) {
  return (
    <View style={[styles.container, { marginBottom: focused ? 45 : 35 }]}>
      <Text style={styles.text}>My Clients</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E02828",
    height: 62,
    width: 62,
    borderRadius: 62,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#E02828",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
    textTransform: "uppercase",
  },
});

export default MyClients;
