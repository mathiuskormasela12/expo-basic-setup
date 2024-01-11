import { StatusBar } from "expo-status-bar";
import JailMonkey from "jail-monkey";
import React, { useEffect } from "react";
import { Alert, BackHandler } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Router from "./src/Router";
import { ReduxWrapper } from "./src/components";

export default function App() {
  useEffect(() => {
    if (JailMonkey.isJailBroken()) {
      Alert.alert(
        "Warning",
        "Careful, we've detected that your device has been jailbroken/rooted.",
        [
          {
            text: "Ok",
            style: "destructive",
            onPress: () => BackHandler.exitApp(),
          },
        ],
      );
    }
  }, []);

  return (
    <SafeAreaProvider>
      <ReduxWrapper>
        <StatusBar style="dark" />
        <Router />
      </ReduxWrapper>
    </SafeAreaProvider>
  );
}
