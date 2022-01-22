import React, { useState, useEffect } from "react";
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
import { getFoods } from "../../api/diet";
import useAuth from "../../auth/useAuth";
import authStorage from "../../auth/storage";

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
  const auth = useAuth();
  const diet = route.params;
  const [searchText, setSearchText] = useState("");
  const [foodType, setFoodType] = useState(foodTypes[0]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [foodCart, setFoodCart] = useState([]);
  const [totalCal, setTotalCal] = useState(0);

  const getFoodsFunc = async () => {
    try {
      setLoading(true);
      const token = await authStorage.getToken();
      const result = await getFoods(token);
      setLoading(false);

      if (result.data.message) return;
      setFoods(result.data);
    } catch (ex) {
      console.log(ex);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoodsFunc();
  }, []);

  const handleAddFoodCart = (food) => {
    const tempArr = [...foodCart];
    const index = tempArr.indexOf(food);

    if (index === -1) {
      tempArr.push(food);
      const tCal = totalCal + parseInt(food.c_calories);
      setTotalCal(tCal);
    } else {
      tempArr.splice(index, 1);
      const tCal = totalCal - parseInt(food.c_calories);
      setTotalCal(tCal);
    }

    console.log(tempArr);
    setFoodCart(tempArr);
  };

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
            {totalCal} Cal{" "}
            <AppText style={styles.progressDescTxt}>added</AppText>
          </AppText>
          <View style={styles.progressMark}>
            <View style={[styles.progressInnerMark, { width: "20%" }]} />
          </View>
        </View>
        {loading && <AppText style={styles.loadTxt}>Loading Foods...</AppText>}
        {!loading && foods && foods.length === 0 && (
          <AppText style={[styles.loadTxt, { color: "#e02828" }]}>
            No Foods
          </AppText>
        )}
        <ScrollView style={{ height: 450 }}>
          {searchText
            ? foods
                .filter((f) =>
                  f.c_item.toLowerCase().includes(searchText.toLowerCase())
                )
                .map((f, index) => (
                  <View key={index} style={styles.foodListCont}>
                    <AppText style={styles.foodName}>
                      {f.c_item.substring(0, 30)}
                    </AppText>
                    <View style={styles.foodListRightContents}>
                      <AppText style={styles.foodCal}>
                        {f.c_calories} Cal
                      </AppText>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => handleAddFoodCart(f)}
                      >
                        <Icon
                          name={foodCart.indexOf(f) > -1 ? "cross" : "add"}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))
            : foods.map((f, index) => (
                <View key={index} style={styles.foodListCont}>
                  <AppText style={styles.foodName}>
                    {f.c_item.substring(0, 30)}
                  </AppText>
                  <View style={styles.foodListRightContents}>
                    <AppText style={styles.foodCal}>{f.c_calories} Cal</AppText>
                    <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={() => handleAddFoodCart(f)}
                    >
                      <Icon name={foodCart.indexOf(f) > -1 ? "cross" : "add"} />
                    </TouchableOpacity>
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
  loadTxt: {
    fontSize: 12,
    textAlign: "center",
    color: "green",
    margin: 15,
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
