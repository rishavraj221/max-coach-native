import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Appointments from "../screens/Appointments";
import MyClients from "../screens/MyClients";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

import MyClientsFooter from "../components/MyClientsFooter";
import Icon from "../assets/Icons";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === routes.HOME) iconName = "home";
          else if (route.name === routes.APPOINTMENTS) iconName = "calander";
          else if (route.name === routes.NOTIFICATIONS) iconName = "bell";
          else if (route.name === routes.PROFILE) iconName = "user";
          else return <MyClientsFooter focused={focused} />;

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              size={size}
              color={focused ? "#E02828" : "#8A8A8A"}
            />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarLabel: route.name === routes.MYCLIENTS ? "" : route.name,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen name={routes.APPOINTMENTS} component={Appointments} />
      <Tab.Screen name={routes.MYCLIENTS} component={MyClients} />
      <Tab.Screen name={routes.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen name={routes.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
