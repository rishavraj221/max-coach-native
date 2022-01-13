import React, { useState } from "react";
import { StyleSheet, View, TextInput, ScrollView } from "react-native";

import AppText from "../components/Text";
import Screen from "../components/Screen";
import MyClientCard from "../components/MyClientCard";

import routes from "../navigation/routes";

const data = [
  {
    name: "Rahul Sharma",
    age: 37,
    isGold: true,
    gender: "M",
    weight: "67",
    height: "5'9''",
    status: "beginner",
    fitnessGoal: "Loose Weight",
  },
  {
    name: "Vikey Kapisway",
    age: 25,
    isGold: true,
    gender: "M",
    weight: "84",
    height: "5'9''",
    status: "beginner",
    fitnessGoal: "Loose Weight",
  },
  {
    name: "Pooja Bhatt",
    age: 21,
    isGold: false,
    gender: "F",
    weight: "51",
    height: "5'9''",
    status: "beginner",
    fitnessGoal: "Gain Weight",
  },
  {
    name: "Shivani Naik",
    age: 20,
    isGold: true,
    gender: "F",
    weight: "55",
    height: "5'9''",
    status: "beginner",
    fitnessGoal: "Gain Weight",
  },
  {
    name: "Rudra Keshav",
    age: 22,
    isGold: false,
    gender: "M",
    weight: "49",
    height: "5'9''",
    status: "beginner",
    fitnessGoal: "Gain Weight",
  },
  {
    name: "Kapil Modi",
    age: 52,
    isGold: true,
    gender: "M",
    weight: "77",
    height: "5'9''",
    status: "advanced",
    fitnessGoal: "Loose Weight",
  },
  {
    name: "Rahul Sharma",
    age: 37,
    isGold: true,
    gender: "M",
    weight: "67",
    height: "5'9''",
    status: "beginner",
    fitnessGoal: "Loose Weight",
  },
];

const MyClientsScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <Screen style={styles.screen}>
      <View style={styles.searchCont}>
        <AppText style={styles.searchHeadText}>Search Client</AppText>
        <TextInput
          style={styles.searchTextInput}
          onChangeText={setSearchText}
        />
      </View>
      <ScrollView style={styles.scrollCont}>
        {searchText
          ? data
              .filter((d) =>
                d.name.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((d, index) => (
                <MyClientCard
                  key={index}
                  data={d}
                  onPress={() => navigation.navigate(routes.CLIENT_DETAIL, d)}
                />
              ))
          : data.map((d, index) => (
              <MyClientCard
                key={index}
                data={d}
                onPress={() => navigation.navigate(routes.CLIENT_DETAIL, d)}
              />
            ))}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
  },
  searchCont: {
    width: "100%",
    alignItems: "center",
  },
  searchHeadText: {
    width: "80%",
    fontSize: 14,
    color: "#707070",
    opacity: 0.6,
    marginVertical: 10,
  },
  searchTextInput: {
    backgroundColor: "#f8f8f8",
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    color: "#707070",
    opacity: 0.8,
  },
  scrollCont: {
    backgroundColor: "#f1f1f1",
    marginTop: 10,
  },
});

export default MyClientsScreen;
