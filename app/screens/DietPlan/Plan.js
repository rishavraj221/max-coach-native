import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";

import AppText from "../../components/Text";
import AppButton from "../../components/Button";
import Screen from "../../components/Screen";
import Icon from "../../assets/Icons";
import routes from "../../navigation/routes";

const user = {
  name: "Rahul Sharma",
  dietPlan: "Weight Loss",
  caloriesDetails: [
    {
      dietName: "Morning Snacks",
      time: "6:00 AM",
      cal: 100,
    },
    {
      dietName: "Breakfast",
      time: "9:00 AM",
      cal: 200,
    },
    {
      dietName: "Lunch",
      time: "12:00 PM",
      cal: 1081,
    },
    {
      dietName: "Evening Snacks",
      time: "6:00 PM",
      cal: 200,
    },
    {
      dietName: "Dinner",
      time: "9:00 PM",
      cal: 1081,
    },
    {
      dietName: "Other",
      time: "10:00 PM",
      cal: 0,
    },
  ],
};

const calenderFilter = [
  "Today",
  "Tomorrow",
  "Yesterday",
  "Day after tomorrow",
  "Day before yesterday",
  "Custom",
];

const PlanScreen = ({ navigation }) => {
  const [showCalanderModal, setShowCalanderModal] = useState(false);
  const [calenderDay, setCalenderDay] = useState("Today");
  const [showCalander, setShowCalander] = useState(false);

  const calDet = user.caloriesDetails;
  let totalCal = 0;

  calDet.forEach((c) => (totalCal += c.cal));

  return (
    <Screen>
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
            <Calendar
              onDayPress={(day) => {
                console.log(day);
                setCalenderDay(moment(day.dateString).format("Do MMM, YYYY"));
                setShowCalander(false);
                setShowCalanderModal(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.headContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrowLeft" style={styles.backIcon} />
          </TouchableOpacity>
          <Image
            style={styles.profilePic}
            source={require("../../assets/avatar.png")}
          />
          <View style={styles.nameDescCont}>
            <AppText style={styles.nameTxt}>Rahul Sharma</AppText>
            <AppText style={styles.descTxt}>
              Diet Plan <AppText style={styles.descValTxt}>Weight Loss</AppText>
            </AppText>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.dateCont}
          onPress={() => setShowCalanderModal(!showCalanderModal)}
        >
          <AppText style={styles.date}>{calenderDay}</AppText>
          <Icon name="dropdown" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
        <View style={styles.shadowDownBar}></View>
        <View style={styles.progressCont}>
          <AppText style={styles.progressTxt}>
            {totalCal} Cal{" "}
            <AppText style={styles.progressDescTxt}>added</AppText>
          </AppText>
          <View style={styles.progressMark}>
            <View style={[styles.progressInnerMark, { width: "20%" }]} />
          </View>
        </View>
        {user.caloriesDetails.map((c, index) => (
          <View key={index} style={styles.dietList}>
            <AppText style={styles.dietName}>{c.dietName}</AppText>
            <AppText style={styles.dietTime}>{c.time}</AppText>
            <AppText style={styles.dietCal}>{c.cal} Cal</AppText>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ marginLeft: "10%" }}
              onPress={() => navigation.navigate(routes.ADD_FOOD, c)}
            >
              <Icon name="add" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.nextBtn}>
        <AppButton title="Create Diet Plan" width="90%" onPress={() => {}} />
      </View>
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
  headContainer: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 15,
  },
  nameDescCont: {
    alignSelf: "flex-end",
    marginLeft: 15,
  },
  nameTxt: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 30,
  },
  descTxt: {
    fontSize: 14,
    color: "#444444",
  },
  descValTxt: {
    fontSize: 14,
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
    elevation: 2,
    marginTop: 10,
  },
  date: {
    color: "#2E3034",
    fontSize: 16,
  },
  shadowDownBar: {
    height: 10,
    width: "100%",
    backgroundColor: "white",
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
  dietList: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 15,
    position: "relative",
    borderColor: "#f3f4f3",
    borderTopWidth: 1,
  },
  dietName: {
    fontSize: 16,
    color: "#444444",
    letterSpacing: -0.6,
    width: "33%",
  },
  dietTime: {
    fontSize: 11,
    color: "#e02828",
    width: "27%",
  },
  dietCal: {
    fontSize: 16,
    color: "#444444",
    textAlign: "right",
    letterSpacing: -0.6,
    fontWeight: "300",
    width: "20%",
  },
  nextBtn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
});

export default PlanScreen;
