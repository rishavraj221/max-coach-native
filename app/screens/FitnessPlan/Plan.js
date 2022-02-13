import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Modal,
  RefreshControl,
  TextInput,
} from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";

import AppText from "../../components/Text";
import AppButton from "../../components/Button";
import Screen from "../../components/Screen";
import Icon from "../../assets/Icons";
import routes from "../../navigation/routes";
import useAuth from "../../auth/useAuth";
import authStorage from "../../auth/storage";
import {
  getFullFitnessPlan,
  getVideos,
  updateFitnessPlan,
} from "../../api/fitness";

const PlanScreen = ({ route, navigation }) => {
  const auth = useAuth();
  const fitnessPlanFromNav = route.params.fitnessPlan;
  const client = route.params.client;

  const [showCalanderModal, setShowCalanderModal] = useState(false);
  const [calenderDay, setCalenderDay] = useState("Today");
  const [showCalander, setShowCalander] = useState(false);
  const [fitnessPlan, setFitnessPlan] = useState(fitnessPlanFromNav);
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [selectedDayIndex, setSelectedDateIndex] = useState(moment().day());
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [videosModal, setVideosModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [warmUpVideos, setWarmUpVideos] = useState(null);
  const [mainMovVideos, setMainMovVideos] = useState(null);
  const [coolDownVideos, setCoolDownVideos] = useState(null);
  const [vidLoading, setVidLoading] = useState(false);

  const [videosCart, setVideosCart] = useState(null);
  const [caloriesCart, setCalCart] = useState(0);
  const [updating, setUpdating] = useState(false);

  const getVidFromServer = async (category) => {
    try {
      setVidLoading(true);
      const token = await authStorage.getToken();
      const result = await getVideos(token, category);
      setVidLoading(false);

      if (category === "Warm Up") setWarmUpVideos(result.data.videos);
      if (category === "Main Movement") setMainMovVideos(result.data.videos);
      if (category === "Cool Down") setCoolDownVideos(result.data.videos);
    } catch (ex) {
      console.log(ex);
      setVidLoading(false);
    }
  };

  const getFitnessPlan = async (coach_id, client_id) => {
    try {
      setLoading(true);
      setRefreshing(true);
      const token = await authStorage.getToken();
      const result = await getFullFitnessPlan(token, coach_id, client_id);
      setRefreshing(false);
      setLoading(false);

      if (result.data.message) return;

      const tempArr = [];
      let tempCal = 0;
      result.data.ft_item.forEach((i) => {
        i.videos.forEach((v) => tempArr.push(v));
        tempCal += i.calories;
      });

      setVideosCart(tempArr);
      setCalCart(tempCal);

      setFitnessPlan(result.data);
    } catch (ex) {
      console.log(ex);
      setLoading(false);
    }
  };

  const updateFitnessPlanFunc = async () => {
    try {
      setUpdating(true);
      const token = await authStorage.getToken();
      const result = await updateFitnessPlan(token, {
        c_id: client.c_id,
        d_id: auth.user.id,
        videos_to_update: {
          calories: caloriesCart,
          day: videosModal.day,
          videos: videosCart,
          workout_name: videosModal.workout_name,
        },
      });
      setUpdating(false);
      setVideosModal(false);
      console.log(result);
    } catch (ex) {
      console.log(ex);
      setUpdating(false);
    }
  };

  useEffect(() => {
    getFitnessPlan(auth.user.id, client.c_id);
  }, []);

  let totalCal = 0;
  fitnessPlan.ft_item
    .filter((d) => d.day === selectedDayIndex)
    .forEach((d) => (totalCal += d.calories));

  const dateHasPlan = (datesArr, givenDate) => {
    const tempDate = moment(givenDate).format("YYYY-MM-DD");

    let res = false;

    datesArr.forEach((d) => {
      if (d === tempDate) res = true;
    });

    return res;
  };

  const getMarkedDatesForCalendar = (datesArr) => {
    let res = {};

    datesArr.forEach((date) => {
      const r = {
        selected: true,
        selectedColor: "#e02828",
      };
      res = { ...res, [date]: r };
    });

    return res;
  };

  const videosArrCategory = (category) => {
    if (category === "Warm Up" && warmUpVideos) return warmUpVideos;
    else if (category === "Main Movement" && mainMovVideos)
      return mainMovVideos;
    else if (category === "Cool Down" && coolDownVideos) return coolDownVideos;

    return false;
  };

  const videoAdded = (vidArr, vidId) => {
    let res = false;

    vidArr &&
      vidArr.forEach((v) => {
        if (v.vi_id === vidId) res = true;
      });

    return res;
  };

  const addVideoToCart = (video) => {
    const tempArr = videosCart ? [...videosCart] : [];

    if (videoAdded(tempArr, video.vi_id)) {
      const index = tempArr.indexOf(
        tempArr.filter((v) => v.vi_id === video.vi_id)[0]
      );
      tempArr.splice(index, 1);
      setCalCart(parseInt(caloriesCart) - parseInt(video.vi_calories));
    } else {
      tempArr.push(video);
      setCalCart(parseInt(caloriesCart) + parseInt(video.vi_calories));
    }

    setVideosCart(tempArr);
  };

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
              minDate={moment(fitnessPlan.ft_dates[0]).format("YYYY-MM-DD")}
              maxDate={moment(
                fitnessPlan.ft_dates[fitnessPlan.ft_dates.length - 1]
              ).format("YYYY-MM-DD")}
              onDayPress={(day) => {
                setCalenderDay(moment(day.dateString).format("Do MMM, YYYY"));
                setSelectedDate(day.dateString);
                setSelectedDateIndex(moment(day.dateString).day());
                setShowCalander(false);
                setShowCalanderModal(false);
              }}
              markedDates={getMarkedDatesForCalendar(fitnessPlan.ft_dates)}
              theme={{
                arrowColor: "#e02828",
              }}
            />
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={videosModal ? true : false}
        onRequestClose={() => {
          setVideosModal(false);
        }}
      >
        <View style={styles.modalFull}>
          <View style={[styles.modal, { height: "75%" }]}>
            <AppText style={styles.modalH1}>{videosModal.workout_name}</AppText>
            <TextInput
              style={styles.searchTextInput}
              onChangeText={setSearchText}
              placeholder="Search Excercise"
            />
            {vidLoading && <AppText style={styles.loadTxt}>Loading...</AppText>}
            {updating && <AppText style={styles.loadTxt}>Updating...</AppText>}
            <ScrollView showsVerticalScrollIndicator={false}>
              {!vidLoading &&
                videosArrCategory(videosModal.workout_name) &&
                videosArrCategory(videosModal.workout_name)
                  .filter((v) =>
                    searchText ? v.vi_title.includes(searchText) : true
                  )
                  .map((wv, index) => (
                    <View key={index} style={styles.modalVideosCont}>
                      <Image
                        style={styles.videoThm}
                        source={require("../../assets/Arm-Circles.png")}
                      />
                      <View style={styles.videoDetCont}>
                        <AppText style={styles.vidTitle}>
                          {wv.vi_title.substring(0, 25)}
                        </AppText>
                        <AppText style={styles.vidCal}>
                          {wv.vi_calories} Cal
                        </AppText>
                      </View>
                      <AppText style={styles.vidTime}>
                        {new Date(wv.vi_duration * 1000)
                          .toISOString()
                          .substring(14, 19)}{" "}
                        Sec
                      </AppText>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.vidFuncIcon}
                        onPress={() => addVideoToCart(wv)}
                      >
                        <Icon
                          name={
                            videoAdded(videosCart, wv.vi_id) ? "tick" : "circle"
                          }
                        />
                      </TouchableOpacity>
                    </View>
                  ))}
            </ScrollView>
            <View style={styles.modalBtn}>
              <AppButton title="Add / Update" onPress={updateFitnessPlanFunc} />
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ backgroundColor: "white" }}>
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
            <AppText style={styles.nameTxt}>{client.c_name}</AppText>
            <AppText style={styles.descTxt}>
              Diet Plan{" "}
              <AppText style={styles.descValTxt}>
                {fitnessPlan.ft_category}
              </AppText>
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
            {caloriesCart} Cal{" "}
            <AppText style={styles.progressDescTxt}>added</AppText>
          </AppText>
          <View style={styles.progressMark}>
            <View style={[styles.progressInnerMark, { width: "20%" }]} />
          </View>
        </View>
        <ScrollView
          style={{ height: "58%" }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => getFitnessPlan(auth.user.id, client.c_id)}
            />
          }
        >
          {loading && <AppText style={styles.loadTxt}>Loading...</AppText>}
          {dateHasPlan(fitnessPlan.ft_dates, selectedDate) ? (
            fitnessPlan.ft_item
              .filter((d) => d.day === selectedDayIndex)
              .map((c, index) => (
                <View key={index}>
                  <View style={styles.dietList}>
                    <AppText style={styles.dietName}>{c.workout_name}</AppText>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={{ marginLeft: "58%" }}
                      onPress={() => {
                        setVideosModal(c);
                        getVidFromServer(c.workout_name);
                      }}
                    >
                      <Icon name="add" />
                    </TouchableOpacity>
                  </View>
                  {c.videos &&
                    c.videos
                      .filter((v) => v.vi_category === c.workout_name)
                      .map((wv, index) => (
                        <View key={index} style={styles.videosCont}>
                          <Image
                            style={styles.videoThm}
                            source={require("../../assets/Arm-Circles.png")}
                          />
                          <View style={styles.videoDetCont}>
                            <AppText style={styles.vidTitle}>
                              {wv.vi_title.substring(0, 25)}
                            </AppText>
                            <AppText style={styles.vidCal}>
                              {wv.vi_calories} Cal
                            </AppText>
                          </View>
                          <AppText style={styles.vidTime}>
                            {new Date(wv.vi_duration * 1000)
                              .toISOString()
                              .substring(14, 19)}{" "}
                            Sec
                          </AppText>
                          <Icon name="cross" style={styles.vidFuncIcon} />
                        </View>
                      ))}
                </View>
              ))
          ) : (
            <AppText style={[styles.loadTxt, { color: "#e02828" }]}>
              {loading ? "" : "No Plan for this Date"}
            </AppText>
          )}
        </ScrollView>
      </View>
      <View style={styles.nextBtn}>
        <AppButton
          title="Create Fitness Plan"
          width="90%"
          onPress={() => navigation.navigate(routes.FITNESS_SUCCESS, client)}
        />
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
  modalH1: {
    textAlign: "center",
    fontSize: 18,
    color: "#444444",
    fontWeight: "bold",
  },
  searchTextInput: {
    backgroundColor: "#f8f8f8",
    width: "100%",
    marginTop: 15,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    color: "#707070",
    opacity: 0.8,
    fontSize: 14,
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
  loadTxt: {
    fontSize: 12,
    textAlign: "center",
    color: "green",
    margin: 15,
  },
  videosCont: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  modalVideosCont: {
    flexDirection: "row",
    paddingTop: 30,
  },
  videoThm: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  videoDetCont: {
    width: "52%",
    paddingHorizontal: 8,
  },
  vidTitle: {
    color: "#444444",
    fontSize: 14,
  },
  vidCal: {
    color: "rgba(68, 68, 68, 0.8)",
    fontWeight: "100",
    fontSize: 14,
    letterSpacing: -0.6,
  },
  vidTime: {
    color: "#444444",
    fontSize: 12,
    width: "18%",
    textAlign: "right",
  },
  vidFuncIcon: {
    width: "15%",
    alignItems: "center",
  },
  modalBtn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
});

export default PlanScreen;
