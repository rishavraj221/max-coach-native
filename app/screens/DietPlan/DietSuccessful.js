import React, { useEffect } from "react";
import { StyleSheet, BackHandler } from "react-native";

import AppText from "../../components/Text";
import Screen from "../../components/Screen";
import DietSuccessIllustration from "../../assets/Illustrations/diet_success";
import routes from "../../navigation/routes";

const DietSuccessScreen = ({ route, navigation }) => {
  const client = route.params;

  const handleBackButtonClick = () => {
    navigation.navigate(routes.CLIENT_DETAIL, client);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);

  return (
    <Screen style={{ backgroundColor: "rgb(248, 248, 248)" }}>
      <DietSuccessIllustration style={styles.text} />
      <AppText style={styles.headTxt}>Diet Plan Created For</AppText>
      <AppText style={styles.name}>{client.c_name}</AppText>
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "45%",
  },
  headTxt: {
    textAlign: "center",
    marginTop: 25,
    color: "#444444",
    fontWeight: "bold",
    fontSize: 18,
  },
  name: {
    textAlign: "center",
    marginTop: 5,
    color: "rgba(68,68,68,0.8)",
    fontSize: 14,
  },
});

export default DietSuccessScreen;
