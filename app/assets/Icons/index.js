import React from "react";
import { Text } from "react-native";

import Account from "./account";
import Add from "./add";
import ArrowLeft from "./arrowLeft";
import ArrowLeft2 from "./arrowLeft2";
import ArrowRight2 from "./arrowRight2";
import Bell from "./bell";
import Calander from "./calander";
import CWD from "./calanderWithDate";
import CalorieTracker from "./calorieTracker";
import Circle from "./circle";
import Comment from "./comment";
import Cross from "./cross";
import DietPlan from "./dietPlan";
import DropDown from "./dropdown";
import FitnessPlan from "./fitnessPlan";
import Home from "./home";
import Phone from "./phone";
import Tick from "./tick";
import User from "./user";
import WaterTracker from "./waterTracker";
import WeightGain from "./weightGain";
import WeightLoss from "./weightLoss";
import WeightTracker from "./weightTracker";

const Icon = ({ name, size, color, style }) => {
  const t = name.toLowerCase();

  if (t === "account") return <Account style={style} size={size} />;
  if (t === "add") return <Add style={style} size={size} color={color} />;
  if (t === "arrowleft")
    return <ArrowLeft style={style} size={size} color={color} />;
  if (t === "arrowleft2")
    return <ArrowLeft2 style={style} size={size} color={color} />;
  if (t === "arrowright2")
    return <ArrowRight2 style={style} size={size} color={color} />;
  if (t === "bell") return <Bell style={style} size={size} color={color} />;
  if (t === "calander")
    return <Calander style={style} size={size} color={color} />;
  if (t === "calanderdate")
    return <CWD style={style} size={size} color={color} />;
  if (t === "calorietracker")
    return <CalorieTracker style={style} size={size} color={color} />;
  if (t === "circle") return <Circle style={style} size={size} color={color} />;
  if (t === "comment")
    return <Comment style={style} size={size} color={color} />;
  if (t === "cross") return <Cross style={style} size={size} color={color} />;
  if (t === "dietplan")
    return <DietPlan style={style} size={size} color={color} />;
  if (t === "dropdown")
    return <DropDown style={style} size={size} color={color} />;
  if (t === "fitnessplan")
    return <FitnessPlan style={style} size={size} color={color} />;
  if (t === "home") return <Home style={style} size={size} color={color} />;
  if (t === "phone") return <Phone style={style} size={size} color={color} />;
  if (t === "tick") return <Tick style={style} size={size} color={color} />;
  if (t === "user") return <User style={style} size={size} color={color} />;
  if (t === "watertracker")
    return <WaterTracker style={style} size={size} color={color} />;
  if (t === "weightgain")
    return <WeightGain style={style} size={size} color={color} />;
  if (t === "weightloss")
    return <WeightLoss style={style} size={size} color={color} />;
  if (t === "weighttracker")
    return <WeightTracker style={style} size={size} color={color} />;

  return <Text>?</Text>;
};

export default Icon;
