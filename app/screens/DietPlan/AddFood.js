import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import AppText from "../../components/Text";
import AppButton from "../../components/Button";
import Screen from "../../components/Screen";
import Icon from "../../assets/Icons";

const foodData = [
  {
    foodName: "Rava Upma",
    cal: 170,
    added: false,
  },
  {
    foodName: "Banana",
    cal: 340,
    added: true,
  },
  {
    foodName: "Samosa",
    cal: 349,
    added: true,
  },
  {
    foodName: "Orange",
    cal: 62,
    added: false,
  },
  {
    foodName: "Green Tea",
    cal: 89,
    added: false,
  },
  {
    foodName: "Marie Gold",
    cal: 43,
    added: false,
  },
  {
    foodName: "Coffee",
    cal: 122,
    added: false,
  },
  {
    foodName: "Cow Milk",
    cal: 170,
    added: false,
  },
];

const foodTypes = [
  "Vegetarian",
  "Non vegetarian",
  "Vegan",
  "Pure Vegetarians",
  "Eggitarians",
];

const AddFoodScreen = ({ route, navigation }) => {
  const diet = route.params;
  const [searchText, setSearchText] = useState("");
  const [foodType, setFoodType] = useState(foodTypes[0]);

  return (
    <Screen style={{ backgroundColor: "white" }}>
      <View>
        <View style={styles.header}>
          <View style={styles.headTitle}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrowLeft" />
            </TouchableOpacity>
            <AppText style={styles.headTitleTxt}>Add Food</AppText>
          </View>
          <TextInput
            style={styles.searchTextInput}
            onChangeText={setSearchText}
            placeholder="Search for food"
          />
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.foodTypeCont}
          showsHorizontalScrollIndicator={false}
        >
          {foodTypes.map((f, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              style={[
                styles.foodType,
                {
                  borderWidth: f === foodType ? 1 : 0,
                  backgroundColor: f === foodType ? "white" : "#f7f7f7",
                },
              ]}
              onPress={() => setFoodType(f)}
            >
              <AppText style={styles.foodTypeTxt}>{f}</AppText>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.progressCont}>
          <AppText style={styles.progressTxt}>
            {diet.cal} Cal{" "}
            <AppText style={styles.progressDescTxt}>added</AppText>
          </AppText>
          <View style={styles.progressMark}>
            <View style={[styles.progressInnerMark, { width: "20%" }]} />
          </View>
        </View>
        <ScrollView style={{ height: 450 }}>
          {foodData.map((f, index) => (
            <View key={index} style={styles.foodListCont}>
              <AppText style={styles.foodName}>{f.foodName}</AppText>
              <View style={styles.foodListRightContents}>
                <AppText style={styles.foodCal}>{f.cal} Cal</AppText>
                <Icon name={f.added ? "cross" : "add"} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.nextBtn}>
        <AppButton
          title={`Add to ${diet.dietName}`}
          width="90%"
          onPress={() => {}}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: "#e0e0e0",
  },
  headTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  headTitleTxt: {
    marginLeft: "35%",
    fontSize: 20,
    fontWeight: "bold",
  },
  searchTextInput: {
    backgroundColor: "#f8f8f8",
    width: "95%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    color: "#707070",
    opacity: 0.8,
    marginTop: 10,
    alignSelf: "center",
  },
  foodTypeCont: {
    padding: 15,
    flexDirection: "row",
  },
  foodType: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: "#979797",
    marginRight: 15,
  },
  foodTypeTxt: {
    fontSize: 11,
    textAlign: "center",
    color: "rgba(68,68,68,0.8)",
    letterSpacing: -0.4,
  },
  progressCont: {
    padding: 15,
  },
  progressTxt: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgba(68,68,68,0.8)",
  },
  progressDescTxt: {
    fontWeight: "normal",
  },
  progressMark: {
    width: "100%",
    height: 6,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 36,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 15,
  },
  progressInnerMark: {
    height: 6,
    borderRadius: 36,
    backgroundColor: "#e02828",
  },
  foodListCont: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  foodName: {
    fontSize: 14,
    color: "#444444",
    letterSpacing: -0.5,
  },
  foodListRightContents: {
    flexDirection: "row",
    width: "27%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  foodCal: {
    fontSize: 16,
    color: "#444444",
    opacity: 0.7,
    letterSpacing: -0.8,
  },
  nextBtn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
});

export default AddFoodScreen;
