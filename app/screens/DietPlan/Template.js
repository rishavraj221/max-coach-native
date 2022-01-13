import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";
import { Switch } from "react-native-paper";

import Icon from "../../assets/Icons";
import AppText from "../../components/Text";
import AppButton from "../../components/Button";
import Screen from "../../components/Screen";

const weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DietPlanTemplate = ({ navigation }) => {
  const [selectTemplate, setSelectTemplate] = useState(1);
  const [selectWeeks, setSelectWeeks] = useState([]);
  const [repeat, setRepeat] = useState(2);

  const handleWeekSelect = (week) => {
    const tempArr = [...selectWeeks];
    const index = tempArr.indexOf(week);

    if (index === -1) tempArr.push(week);
    else tempArr.splice(index, 1);

    setSelectWeeks(tempArr);
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
              <AppText style={styles.tempText}>Weight Balance</AppText>
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
                  backgroundColor:
                    selectWeeks.indexOf(w) > -1 ? "#e02828" : "#c4c4c4",
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
        <AppButton title="Next" width="90%" />
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
