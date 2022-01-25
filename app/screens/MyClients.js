import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, ScrollView } from "react-native";

import AppText from "../components/Text";
import Screen from "../components/Screen";
import MyClientCard from "../components/MyClientCard";
import { getMyClients } from "../api/appClients";
import useAuth from "../auth/useAuth";
import authStorage from "../auth/storage";

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
  const auth = useAuth();
  const [searchText, setSearchText] = useState("");
  const [clients, setClients] = useState(null);
  const [loading, setLoading] = useState(false);

  const getToken = async () => {
    const r = await authStorage.getToken();
    getClients(r, auth.user.id);
  };

  useEffect(() => {
    getToken();
  }, []);

  const getClients = async (token, client_id) => {
    try {
      setLoading(true);
      const result = await getMyClients(token, client_id);
      setLoading(false);

      if (!result.ok) return console.log(result);
      setClients(result.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.searchCont}>
        <AppText style={styles.searchHeadText}>Search Client</AppText>
        <TextInput
          style={styles.searchTextInput}
          onChangeText={setSearchText}
        />
      </View>
      {loading && <AppText style={styles.loadTxt}>Loading Clients...</AppText>}
      {clients && clients.length === 0 && (
        <AppText style={[styles.loadTxt, { color: "#e02828" }]}>
          No Clients
        </AppText>
      )}
      <ScrollView style={styles.scrollCont}>
        {searchText
          ? clients &&
            clients
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
          : clients &&
            clients.map((d, index) => (
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
  loadTxt: {
    fontSize: 12,
    textAlign: "center",
    color: "green",
    margin: 15,
  },
});

export default MyClientsScreen;
