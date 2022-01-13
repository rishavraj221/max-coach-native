import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";

import AppText from "../components/Text";
import Screen from "../components/Screen";
import AppointmentCard from "../components/AppointmentCard";

const data = [
  {
    name: "Rahul Sharma",
    gender: "male",
    age: 37,
    time: "2 Nov 09:30 AM",
    isGold: true,
    plan: ["Cardio", "Weight Traning", "Yoga"],
  },
  {
    name: "Rajesh Mishra",
    gender: "male",
    age: 27,
    time: "4 Nov 07:30 AM",
    isGold: true,
    plan: ["Cardio", "Weight Traning", "Yoga"],
  },
  {
    name: "Ria Saxena",
    gender: "female",
    age: 20,
    time: "5 Nov 09:30 AM",
    isGold: false,
    plan: ["Cardio", "Weight Traning", "Yoga"],
  },
  {
    name: "Raghav Talwar",
    gender: "male",
    age: 21,
    time: "10 Nov 06:30 PM",
    isGold: true,
    plan: ["Cardio", "Weight Traning", "Yoga"],
  },
  {
    name: "Shivam Kumar",
    gender: "male",
    age: 22,
    time: "2 Nov 09:30 AM",
    isGold: false,
    plan: ["Cardio", "Weight Traning", "Yoga"],
  },
  {
    name: "Priyanka Sharma",
    gender: "female",
    age: 32,
    time: "2 Nov 09:30 AM",
    isGold: true,
    plan: ["Cardio", "Weight Traning", "Yoga"],
  },
  {
    name: "Mangesh Despande",
    gender: "male",
    age: 26,
    time: "2 Nov 09:30 AM",
    isGold: false,
    plan: ["Cardio", "Weight Traning", "Yoga"],
  },
];

const AppointmentScreen = () => {
  const [tab, setTab] = useState("upcoming");

  return (
    <Screen>
      <View style={styles.tabContainer}>
        <View style={styles.tab}>
          <TouchableOpacity
            onPress={() => setTab("upcoming")}
            activeOpacity={0.8}
            style={[
              styles.upTabCont,
              { backgroundColor: tab === "upcoming" ? "#a4a4a4" : "#dbdbdb" },
            ]}
          >
            <AppText style={styles.tabText}>UPCOMING</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab("previous")}
            activeOpacity={0.8}
            style={[
              styles.prTabCont,
              { backgroundColor: tab === "previous" ? "#a4a4a4" : "#dbdbdb" },
            ]}
          >
            <AppText style={styles.tabText}>PREVIOUS</AppText>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map((d, index) => (
          <AppointmentCard key={index} data={d} />
        ))}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
  },
  tabContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: 30,
    marginBottom: 10,
  },
  tab: {
    height: 40,
    width: 330,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  upTabCont: {
    height: 40,
    width: 165,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  prTabCont: {
    height: 40,
    width: 165,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "white",
    fontWeight: "500",
    fontSize: 12,
  },
});

export default AppointmentScreen;
