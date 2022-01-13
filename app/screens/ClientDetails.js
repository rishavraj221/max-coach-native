import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";

import AppText from "../components/Text";
import Screen from "../components/Screen";
import Icon from "../assets/Icons";
import routes from "../navigation/routes";

const appointments = [
  {
    day: 5,
    month: "Dec",
    week: "Mon",
    time: "10:30 am",
    duration: 20,
  },
  {
    day: 27,
    month: "Nov",
    week: "Tue",
    time: "10:30 am",
    duration: 20,
  },
  {
    day: 8,
    month: "Jan",
    week: "Wed",
    time: "10:30 am",
    duration: 20,
  },
  {
    day: 12,
    month: "Feb",
    week: "Thr",
    time: "10:30 am",
    duration: 20,
  },
  {
    day: 15,
    month: "Mar",
    week: "Fri",
    time: "10:30 am",
    duration: 20,
  },
];

const MyClientsDetailScreen = ({ route, navigation }) => {
  const client = route.params;
  return (
    <Screen>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" style={styles.arrowIcon} />
          </TouchableOpacity>
          <View style={styles.profileHead}>
            <Image
              style={styles.profilePic}
              source={require("../assets/avatar.png")}
            />
            <AppText style={styles.profileName}>{client.name}</AppText>
            <View style={styles.connectBtnCont}>
              <Icon name="comment" size="20" style={styles.commentIcon} />
              <Icon name="phone" size="22" style={styles.commentIcon} />
            </View>
          </View>
          <View style={styles.vbar} />
          <View style={styles.statCont1}>
            <View style={styles.statDet}>
              <AppText style={styles.statKey}>Gender</AppText>
              <AppText style={styles.statVal}>{client.gender}</AppText>
            </View>
            <View style={styles.statDet}>
              <AppText style={styles.statKey}>Age</AppText>
              <AppText style={styles.statVal}>{client.age}</AppText>
            </View>
            <View style={styles.statDet}>
              <AppText style={styles.statKey}>Weight</AppText>
              <AppText style={styles.statVal}>{client.weight}</AppText>
            </View>
            <View style={styles.statDet}>
              <AppText style={styles.statKey}>Height</AppText>
              <AppText style={styles.statVal}>{client.height}</AppText>
            </View>
          </View>
          <View style={styles.vbar} />
          <View style={styles.statCont1}>
            <View style={styles.statDet}>
              <AppText style={styles.statKey}>Status</AppText>
              <AppText style={styles.statVal}>{client.status}</AppText>
            </View>
            <View style={styles.statDet}>
              <AppText style={styles.statKey}>Fitness Goal</AppText>
              <AppText style={styles.statVal}>{client.fitnessGoal}</AppText>
            </View>
          </View>
        </View>
        <View style={styles.planCont}>
          <TouchableOpacity style={styles.planBtn} activeOpacity={0.8}>
            <Icon name="fitnessPlan" style={{ marginLeft: 15 }} />
            <View style={styles.planStat}>
              <AppText style={styles.planStatHead}>Fitness Plan</AppText>
              <AppText style={styles.planStatVal}>Create New</AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.planBtn}
            onPress={() =>
              navigation.navigate(routes.DIET_PLAN_TEMPLATE, client)
            }
            activeOpacity={0.8}
          >
            <Icon name="dietPlan" style={{ marginLeft: 15 }} />
            <View style={styles.planStat}>
              <AppText style={styles.planStatHead}>Fitness Plan</AppText>
              <AppText style={styles.planStatVal}>Create New</AppText>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.trackerCont}>
          <View style={{ height: 90 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.tracker}>
                <Icon name="calorietracker" size={30} />
                <AppText style={styles.trackerName}>Calorie Tracker</AppText>
              </View>
              <View style={styles.tracker}>
                <Icon name="weighttracker" size={30} />
                <AppText style={styles.trackerName}>Weight Tracker</AppText>
              </View>
              <View style={styles.tracker}>
                <Icon name="watertracker" size={30} />
                <AppText style={styles.trackerName}>Water Tracker</AppText>
              </View>
              <View style={styles.tracker}>
                <Icon name="calorietracker" size={30} />
                <AppText style={styles.trackerName}>Calorie Tracker</AppText>
              </View>
              <View style={styles.tracker}>
                <Icon name="weighttracker" size={30} />
                <AppText style={styles.trackerName}>Weight Tracker</AppText>
              </View>
            </ScrollView>
          </View>
          <View style={styles.vbar} />
          <View style={styles.calorieStats}>
            <AppText style={styles.calorieStatsText}>
              <AppText style={styles.calorieStatsTextBold}>300</AppText> of{" "}
              <AppText style={styles.calorieStatsTextBold}>2250</AppText> Cal
              Consumed today
            </AppText>
            <View style={styles.calorieDate}>
              <Icon name="arrowleft2" />
              <AppText style={styles.calorieStatsTextBold}>3 Dec</AppText>
              <Icon name="arrowright2" />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "white", height: 40, width: "100%" }} />
        <AppText style={styles.appointmentsHead}>Appointments</AppText>
        <View style={styles.appointmentsCont}>
          <View style={styles.appointmentCard}>
            <View style={styles.appointmentDate}>
              <Icon name="calanderDate" style={styles.calanderSVG} />
              <AppText style={styles.apDay}>5</AppText>
              <AppText style={styles.apMon}>Dec</AppText>
            </View>
            <View style={styles.apTimeCont}>
              <AppText style={styles.apTime}>Mon, 10:30 am</AppText>
              <AppText style={styles.apDuration}>20 Mins</AppText>
            </View>
          </View>
          <View style={styles.appointmentCard}>
            <View style={styles.appointmentDate}>
              <Icon name="calanderDate" style={styles.calanderSVG} />
              <AppText style={styles.apDay}>27</AppText>
              <AppText style={styles.apMon}>Nov</AppText>
            </View>
            <View style={styles.apTimeCont}>
              <AppText style={styles.apTime}>Mon, 10:30 am</AppText>
              <AppText style={styles.apDuration}>20 Mins</AppText>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <View style={styles.planCont}>
        <TouchableOpacity>
          <AppText style={styles.planBtn}>Create Fitness Plan</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.CREATE_DIET_PLAN, client)}
        >
          <AppText style={styles.planBtn}>Create Diet Plan</AppText>
        </TouchableOpacity>
      </View> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 310,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    backgroundColor: "#f8f8f8",
  },
  profileHead: {
    alignItems: "center",
    marginBottom: 10,
  },
  arrowIcon: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  profileName: {
    marginLeft: 12,
    marginTop: 5,
    fontSize: 20,
    fontWeight: "700",
  },
  connectBtnCont: {
    flexDirection: "row",
  },
  commentIcon: {
    backgroundColor: "white",
    width: 36,
    height: 36,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.07,
    elevation: 2,
    margin: 5,
  },
  statCont1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  statCont2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  statDet: {
    padding: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  statDet2: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
    width: "50%",
  },
  statKey: {
    color: "rgba(68,68,68,0.8)",
    textAlign: "center",
    fontSize: 14,
  },
  statVal: {
    textAlign: "center",
    color: "#000",
    fontSize: 14,
    marginLeft: 10,
  },
  hbar: {
    height: 34,
    width: 1,
    backgroundColor: "#8F92A1",
    opacity: 0.2,
  },
  vbar: {
    height: 1,
    width: "100%",
    backgroundColor: "#8F92A1",
    opacity: 0.2,
  },
  planCont: {
    width: "90%",
    height: 60,
    alignSelf: "center",
    marginTop: -35,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  planBtn: {
    width: "48%",
    backgroundColor: "white",
    height: 60,
    borderRadius: 5,
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.07,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  planStat: {
    marginLeft: 10,
  },
  planStatHead: {
    fontSize: 11,
    lineHeight: 22,
    color: "#686868",
  },
  planStatVal: {
    fontSize: 14,
    lineHeight: 22,
    color: "#e02828",
  },
  trackerCont: {
    width: "90%",
    backgroundColor: "#ffffff",
    height: 150,
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.07,
    elevation: 2,
    alignSelf: "center",
    padding: 15,
  },
  tracker: {
    alignItems: "center",
    paddingTop: 12,
    paddingHorizontal: 8,
  },
  trackerName: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
    color: "#444444",
  },
  calorieStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
  },
  calorieStatsText: {
    fontSize: 12,
    lineHeight: 22,
    color: "rgba(68, 68, 68, 0.8)",
  },
  calorieStatsTextBold: {
    fontSize: 12,
    lineHeight: 22,
    color: "black",
    fontWeight: "bold",
  },
  calorieDate: {
    flexDirection: "row",
  },
  appointmentsHead: {
    color: "#444444",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    paddingHorizontal: 25,
  },
  appointmentsCont: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  appointmentCard: {
    height: 74,
    width: "47%",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  appointmentDate: {
    position: "relative",
    alignItems: "center",
    marginLeft: 25,
  },
  apDay: {
    fontSize: 16,
    lineHeight: 16,
    color: "#404040",
    textAlign: "center",
    fontWeight: "bold",
  },
  apMon: {
    fontSize: 9,
    color: "#707070",
    lineHeight: 9,
    textAlign: "center",
  },
  calanderSVG: {
    position: "absolute",
    top: -10,
  },
  apTimeCont: {
    marginLeft: 20,
  },
  apTime: {
    fontSize: 13,
    color: "#404040",
    lineHeight: 14,
    fontWeight: "700",
  },
  apDuration: {
    fontSize: 11,
    color: "#707070",
    lineHeight: 14,
    marginTop: 4,
  },
  btnCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  noteBtn: {
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(143, 146, 161, 0.2)",
    borderRadius: 40,
    width: 154,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noteText: {
    fontSize: 13,
    lineHeight: 16,
    color: "#8a8a8a",
    fontWeight: "600",
    marginLeft: 4,
  },
});

export default MyClientsDetailScreen;
