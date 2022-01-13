import React, { useState } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import AppLoading from "expo-app-loading";

import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import ClientNavigator from "./app/navigation/ClientNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

import ClientDetail from "./app/screens/ClientDetails";

LogBox.ignoreLogs(["Remote debugger"]);

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer>
        {user ? <ClientNavigator /> : <AuthNavigator />}
        {/* <ClientDetail /> */}
        <Toast />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
