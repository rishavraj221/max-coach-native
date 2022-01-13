import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Icon from "../assets/Icons";
import AppText from "./Text";

function MyClientCard({ data, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.iconCont}>
        <Icon name="account" size={40} />
        {data.isGold && (
          <View style={styles.gpCont}>
            <AppText style={styles.gpText}>GOLD PLAN</AppText>
          </View>
        )}
      </View>
      <View style={styles.dataCont}>
        <View style={styles.persDet}>
          <AppText style={styles.dataname}>{data.name}</AppText>
          <AppText style={styles.persDetText}>
            {data.gender + " | " + data.age + " Years"}
          </AppText>
        </View>
        <AppText style={styles.fgText}>
          <AppText style={styles.fgHeadText}>Fitness Goal</AppText>{" "}
          {data.fitnessGoal}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    width: "100%",
    marginBottom: 5,
  },
  iconCont: {
    alignItems: "center",
    width: 63,
  },
  gpCont: {
    width: 63,
    height: 17,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#919191",
    borderWidth: 0.5,
    marginTop: 10,
  },
  gpText: {
    color: "#686868",
    fontSize: 10,
  },
  dataCont: {
    marginLeft: 15,
  },
  dataname: {
    fontSize: 14,
    fontWeight: "700",
    color: "#707070",
  },
  persDet: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
  },
  persDetText: {
    fontSize: 14,
    color: "#707070",
  },
  fgText: {
    fontSize: 12,
    color: "#656565",
  },
  fgHeadText: {
    fontSize: 12,
    color: "#707070",
    opacity: 0.6,
  },
});

export default MyClientCard;
