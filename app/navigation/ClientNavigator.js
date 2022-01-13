import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ClientDetails from "../screens/ClientDetails";
import AppTabNavigator from "./AppNavigator";
import DietPlanTemplate from "../screens/DietPlan/Template";

import routes from "./routes";

const Stack = createStackNavigator();

const ClientStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.APPTABNAVIGATOR} component={AppTabNavigator} />
      <Stack.Screen name={routes.CLIENT_DETAIL} component={ClientDetails} />
      <Stack.Screen
        name={routes.DIET_PLAN_TEMPLATE}
        component={DietPlanTemplate}
      />
    </Stack.Navigator>
  );
};

export default ClientStackNavigator;
