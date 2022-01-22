import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Switch } from "react-native-paper";
import moment from "moment";

import Icon from "../../assets/Icons";
import AppText from "../../components/Text";
import AppButton from "../../components/Button";
import Screen from "../../components/Screen";
import routes from "../../navigation/routes";
import useAuth from "../../auth/useAuth";

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const mealArr = [
  {
    mealTime: "6:00 AM",
    mealName: "Morning Snacks",
  },
  {
    mealTime: "9:00 AM",
    mealName: "Breakfast",
  },
  {
    mealTime: "12:00 PM",
    mealName: "Lunch",
  },
  {
    mealTime: "6:00 PM",
    mealName: "Evening Snacks",
  },
  {
    mealTime: "9:00 PM",
    mealName: "Dinner",
  },
  {
    mealTime: "10:00 PM",
    mealName: "Other",
  },
];

const DietPlanTemplate = ({ route, navigation }) => {
  const client = route.params;
  const auth = useAuth();
  const [selectTemplate, setSelectTemplate] = useState(1);
  const [selectWeeks, setSelectWeeks] = useState([]);
  const [repeat, setRepeat] = useState(2);

  const handleWeekSelect = (week) => {
    const tempArr = [...selectWeeks];
    const index = weeks.indexOf(week);

    let weekPresent = false;
    tempArr.forEach((w) => {
      if (w === index) weekPresent = true;
    });

    if (weekPresent) {
      const ind = tempArr.indexOf(index);
      tempArr.splice(ind, 1);
    } else {
      tempArr.push(index);
    }

    tempArr.sort();

    setSelectWeeks(tempArr);
  };

  const checkForIndex = (arr, index) => {
    let res = false;

    arr.forEach((a) => {
      if (a === index) res = true;
    });

    return res;
  };

  const getTemplateName = (templateIndex) => {
    if (templateIndex === 1) return "Weight Loss";
    if (templateIndex === 2) return "Weight Gain";
    return "Balance Diet";
  };

  const generateDiItems = () => {
    const res = [];

    selectWeeks.forEach((w) => {
      mealArr.forEach((m) => {
        res.push({
          day: w,
          time: m.mealTime,
          mealName: m.mealName,
          food_items: [],
          calories: 0,
        });
      });
    });

    return res;
  };

  const gen_dates = (di_weeks, di_days) => {
    const res = [];

    const days_arr = di_days.sort();

    for (let i = 1; i <= di_weeks; i++) {
      days_arr.forEach((d) =>
        res.push(
          moment()
            .day(7 * i + d)
            .format("YYYY-MM-DD")
        )
      );
    }

    return res;
  };

  const handleNextBtn = () => {
    if (!selectTemplate)
      return Alert.alert("Please select template", "Template is required");
    if (selectWeeks.length === 0)
      return Alert.alert(
        "Please select atleast one week day",
        "Week days are required for planning diet"
      );
    if (!repeat)
      return Alert.alert(
        "Please select repeat weeks",
        "Repeat weeks are required"
      );

    const diet_plan_dates = gen_dates(repeat, selectWeeks);

    console.log(
      JSON.stringify(
        {
          client_id: client.c_id,
          coach_id: auth.user.id,
          di_weeks: repeat,
          date_created: moment().format("YYYY-MM-DD"),
          di_category: getTemplateName(selectTemplate),
          di_days: selectWeeks,
          di_item: generateDiItems(),
          di_dates: diet_plan_dates,
          start_date: diet_plan_dates[0],
          end_date: diet_plan_dates[diet_plan_dates.length - 1],
        },
        null,
        2
      )
    );
    // console.log(generateDiItems);
    navigation.navigate(routes.CREATE_DIET_PLAN);
  };

  return (
    <Screen>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" />
          </TouchableOpacity>
          <AppText style={styles.pageTitle}>Create Diet Plan</AppText>
        </View>
        <View style={styles.switchCont}>
          <AppText style={styles.switchTxt}>Select Template</AppText>
          <Switch
            value={selectTemplate ? true : false}
            onValueChange={() => setSelectTemplate(selectTemplate ? false : 1)}
            color="#e02828"
          />
        </View>
        {selectTemplate && (
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.templateContainer}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setSelectTemplate(1)}
              style={[
                styles.templateBox,
                {
                  borderColor:
                    selectTemplate === 1 ? "#e02828" : "rgba(0,0,0,0.2)",
                  borderWidth: selectTemplate === 1 ? 1 : 0.5,
                },
              ]}
            >
              <Icon name="weightLoss" style={styles.tempIcon} />
              <AppText style={styles.tempText}>Weight Loss</AppText>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setSelectTemplate(2)}
              style={[
                styles.templateBox,
                {
                  borderColor:
                    selectTemplate === 2 ? "#e02828" : "rgba(0,0,0,0.2)",
                  borderWidth: selectTemplate === 2 ? 1 : 0.5,
                },
              ]}
            >
              <Icon name="weightGain" style={styles.tempIcon} />
              <AppText style={styles.tempText}>Weight Gain</AppText>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setSelectTemplate(3)}
              style={[
                styles.templateBox,
                {
                  borderColor:
                    selectTemplate === 3 ? "#e02828" : "rgba(0,0,0,0.2)",
                  borderWidth: selectTemplate === 3 ? 1 : 0.5,
                },
              ]}
            >
              <Icon name="weightLoss" style={styles.tempIcon} />
              <AppText style={styles.tempText}>Balance Diet</AppText>
            </TouchableOpacity>
          </ScrollView>
        )}
        <View style={styles.switchCont}>
          <AppText style={styles.switchTxt}>Select Days</AppText>
          <AppText style={styles.numDays}>
            {selectWeeks.length === 0 || selectWeeks.length === 1
              ? `${selectWeeks.length} Day`
              : `${selectWeeks.length} Days`}
          </AppText>
        </View>
        <View style={styles.weeksSelectCont}>
          {weeks.map((w, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.daySelectorContainer,
                {
                  backgroundColor: checkForIndex(selectWeeks, index)
                    ? "#e02828"
                    : "#c4c4c4",
                },
              ]}
              onPress={() => handleWeekSelect(w)}
            >
              <AppText style={styles.daySelector}>{w}</AppText>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.switchCont}>
          <AppText style={styles.switchTxt}>Repeat for</AppText>
          <Switch
            value={repeat ? true : false}
            onValueChange={() => setRepeat(repeat ? false : 2)}
            color="#e02828"
          />
        </View>
        {repeat && (
          <View style={styles.repeatWeeksCont}>
            {[1, 2, 3].map((v, index) => (
              <TouchableOpacity
                activeOpacity={0.7}
                key={index}
                onPress={() => setRepeat(v)}
                style={[
                  styles.repeatWeekBtn,
                  { backgroundColor: repeat === v ? "#e02828" : "#f3f4f3" },
                ]}
              >
                <AppText
                  style={[
                    styles.repeatWeekTxt,
                    { color: repeat === v ? "white" : "rgba(68,68,68,0.8)" },
                  ]}
                >
                  {v} Week
                </AppText>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {repeat && (
          <View style={styles.repeatWeeksCont}>
            {[4, 5, 6].map((v, index) => (
              <TouchableOpacity
                activeOpacity={0.7}
                key={index}
                onPress={() => setRepeat(v)}
                style={[
                  styles.repeatWeekBtn,
                  { backgroundColor: repeat === v ? "#e02828" : "#f3f4f3" },
                ]}
              >
                <AppText
                  style={[
                    styles.repeatWeekTxt,
                    { color: repeat === v ? "white" : "rgba(68,68,68,0.8)" },
                  ]}
                >
                  {v} Week
                </AppText>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {repeat && (
          <View style={styles.repeatWeeksCont}>
            {[7, 8, 9].map((v, index) => (
              <TouchableOpacity
                activeOpacity={0.7}
                key={index}
                onPress={() => setRepeat(v)}
                style={[
                  styles.repeatWeekBtn,
                  { backgroundColor: repeat === v ? "#e02828" : "#f3f4f3" },
                ]}
              >
                <AppText
                  style={[
                    styles.repeatWeekTxt,
                    { color: repeat === v ? "white" : "rgba(68,68,68,0.8)" },
                  ]}
                >
                  {v} Week
                </AppText>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
      <View style={styles.nextBtn}>
        <AppButton title="Next" width="90%" onPress={handleNextBtn} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  pageTitle: {
    color: "#444444",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 20,
  },
  switchCont: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchTxt: {
    color: "rgba(68, 68, 68, 0.8)",
    fontSize: 16,
  },
  templateContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  templateBox: {
    height: 58,
    width: 132,
    borderRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.5,
    elevation: 2,
    backgroundColor: "white",
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
  },
  tempIcon: {
    marginLeft: 10,
  },
  tempText: {
    fontSize: 12,
    color: "#444444",
  },
  numDays: {
    fontSize: 11,
    color: "rgba(68,68,68,0.8)",
  },
  weeksSelectCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  daySelectorContainer: {
    width: 39,
    height: 39,
    borderRadius: 39,
    alignItems: "center",
    justifyContent: "center",
  },
  daySelector: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  repeatWeeksCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  repeatWeekBtn: {
    width: 95,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  repeatWeekTxt: {
    fontSize: 14,
    textAlign: "center",
  },
  nextBtn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
});

export default DietPlanTemplate;
