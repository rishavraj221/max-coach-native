import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Icon from "../assets/Icons";
import AppText from "./Text";

function AppointmentCard({ data }) {
  let gender;
  if (data.gender === "male") gender = "M";
  else if (data.gender === "female") gender = "F";
  else gender = "O";

  let planText = "";
  data.plan.forEach((p) => {
    planText += "• " + p + "   ";
  });

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <View style={styles.iconCont}>
        <Icon name="account" />
        {data.isGold && (
          <View style={styles.gpCont}>
            <AppText style={styles.gpText}>GOLD PLAN</AppText>
          </View>
        )}
      </View>
      <View style={styles.dataCont}>
        <AppText style={styles.dataname}>{data.name}</AppText>
        <View style={styles.persDet}>
          <AppText style={styles.persDetText}>
            {gender + " | " + data.age + " Years"}
          </AppText>
          <AppText style={styles.timeText}>{data.time}</AppText>
        </View>
        <AppText style={styles.planText}>{planText}</AppText>
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
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
  },
  persDetText: {
    fontSize: 14,
    color: "#707070",
  },
  timeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#6b779a",
  },
  planText: {
    fontSize: 12,
    color: "#707070",
  },
});

export default AppointmentCard;
