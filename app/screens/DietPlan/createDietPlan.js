import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Modal,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { RadioButton, Switch } from "react-native-paper";
import { Calendar } from "react-native-calendars";

import AppText from "../../components/Text";
import AppButton from "../../components/Button";
import Screen from "../../components/Screen";
import Icon from "../../assets/Icons";

const calenderFilter = [
  "Today",
  "Tomorrow",
  "Yesterday",
  "Day after tomorrow",
  "Day before yesterday",
  "Custom",
];

const CreateDietPlanScreen = ({ route, navigation }) => {
  const client = route.params;

  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showCalanderModal, setShowCalanderModal] = useState(false);
  const [showCalander, setShowCalander] = useState(false);

  const [scheduleDuration, setScheduleDuration] = useState("2Weeks");
  const [scheduleRepeatDuration, setScheduleRepeatDuration] =
    useState("2WeeksR");
  const [repeatSwitch, setRepeatSwitch] = useState(true);
  const [calenderDay, setCalenderDay] = useState("Today");

  const get_gender = (gender) => {
    if (gender === "M") return "Male";
    if (gender === "F") return "Female";
    if (gender === "O") return "Other";
    else return "";
  };

  return (
    <Screen>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showScheduleModal}
        onRequestClose={() => {
          setShowScheduleModal(!showScheduleModal);
        }}
      >
        <View style={styles.modalFull}>
          <View style={[styles.modal, { height: repeatSwitch ? 430 : 340 }]}>
            <AppText style={styles.modalHeadText}>Diet Schedule for</AppText>
            <View style={styles.radioBtnCont}>
              <RadioButton
                value="1Week"
                status={scheduleDuration === "1Week" ? "checked" : "unchecked"}
                color="#e02828"
                onPress={() => setScheduleDuration("1Week")}
              />
              <AppText style={styles.scheduleTxt}>1 Week</AppText>
            </View>
            <View style={styles.radioBtnCont}>
              <RadioButton
                value="2Weeks"
                status={scheduleDuration === "2Weeks" ? "checked" : "unchecked"}
                color="#e02828"
                onPress={() => setScheduleDuration("2Weeks")}
              />
              <AppText style={styles.scheduleTxt}>2 Week</AppText>
            </View>
            <View style={styles.repeatHead}>
              <AppText style={styles.modalHeadText}>Repeat for</AppText>
              <Switch
                value={repeatSwitch}
                onValueChange={() => setRepeatSwitch(!repeatSwitch)}
                color="#e02828"
              />
            </View>
            {repeatSwitch && (
              <>
                <View style={styles.radioBtnCont}>
                  <RadioButton
                    value="1WeekR"
                    status={
                      scheduleRepeatDuration === "1WeekR"
                        ? "checked"
                        : "unchecked"
                    }
                    color="#e02828"
                    onPress={() => setScheduleRepeatDuration("1WeekR")}
                  />
                  <AppText style={styles.scheduleTxt}>1 Week</AppText>
                </View>
                <View style={styles.radioBtnCont}>
                  <RadioButton
                    value="2WeeksR"
                    status={
                      scheduleRepeatDuration === "2WeeksR"
                        ? "checked"
                        : "unchecked"
                    }
                    color="#e02828"
                    onPress={() => setScheduleRepeatDuration("2WeeksR")}
                  />
                  <AppText style={styles.scheduleTxt}>2 Week</AppText>
                </View>
              </>
            )}
            <View style={styles.updateBtn}>
              <AppButton
                title="Update"
                onPress={() => setShowScheduleModal(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showCalanderModal}
        onRequestClose={() => {
          setShowCalanderModal(!showCalanderModal);
        }}
      >
        <View style={styles.modalFull}>
          <View style={[styles.modal, { height: showCalander ? 400 : 350 }]}>
            {showCalander ? (
              <Calendar
                onDayPress={(day) => {
                  setCalenderDay(day.dateString);
                  setShowCalander(false);
                  setShowCalanderModal(false);
                }}
              />
            ) : (
              calenderFilter.map((st, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    if (st === "Custom") {
                      setShowCalander(true);
                      return;
                    }
                    setCalenderDay(st);
                    setShowCalanderModal(false);
                  }}
                >
                  <AppText style={[styles.modalHeadText, { marginBottom: 30 }]}>
                    {st}
                  </AppText>
                </TouchableOpacity>
              ))
            )}
          </View>
        </View>
      </Modal>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.arrowIcon}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrowleft" />
          </TouchableOpacity>
          <Image
            style={styles.profilePic}
            source={require("../../assets/avatar.png")}
          />
          <AppText style={styles.profileName}>
            {client.name.toUpperCase()}
          </AppText>
          <AppText style={styles.profileStat}>
            {get_gender(client.gender) +
              " " +
              client.age +
              " | " +
              client.fitnessGoal}
          </AppText>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.scheduleCont}
          onPress={() => setShowScheduleModal(!showScheduleModal)}
        >
          <AppText style={styles.schHead}>
            SCHEDULE{" "}
            <AppText style={styles.schStat}>
              {scheduleDuration === "1Week" ? "1 Week" : "2 Weeks"}
            </AppText>
          </AppText>
        </TouchableOpacity>
        <View style={styles.shadowDownBar}></View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.dateCont}
          onPress={() => setShowCalanderModal(!showCalanderModal)}
        >
          <AppText style={styles.date}>{calenderDay}</AppText>
          <Icon name="dropdown" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
        <View style={styles.shadowDownBar}></View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  modalFull: {
    height: "100%",
    width: "100%",
    position: "relative",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderRadius: 20,
    padding: 20,
    paddingTop: 30,
  },
  modalHeadText: {
    fontSize: 18,
    color: "rgba(68,68,68,0.8)",
    marginBottom: 10,
  },
  radioBtnCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  scheduleTxt: {
    fontSize: 14,
    color: "rgba(68, 68, 68, 0.8)",
  },
  repeatHead: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  updateBtn: {
    marginTop: 10,
  },
  shadowDownBar: {
    height: 10,
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    height: 160,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#E0E0E0",
    position: "relative",
  },
  arrowIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  profilePic: {
    height: 45,
    width: 45,
    borderRadius: 45,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.5,
    lineHeight: 19,
    marginBottom: 5,
    marginTop: 10,
  },
  profileStat: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  scheduleCont: {
    height: 58,
    width: "100%",
    backgroundColor: "#f3f4f3",
    justifyContent: "center",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  schHead: {
    fontSize: 14,
    color: "#444444",
  },
  schStat: {
    fontSize: 16,
    color: "#e02828",
  },
  dateCont: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  date: {
    color: "#2E3034",
    fontSize: 16,
  },
});

export default CreateDietPlanScreen;
