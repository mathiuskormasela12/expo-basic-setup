import { StatusBar } from "expo-status-bar";
import React from "react";

import Router from "./src/Router";
import { ReduxWrapper } from "./src/components";

export default function App() {
  return (
    <ReduxWrapper>
      <StatusBar style="dark" />
      <Router />
    </ReduxWrapper>
  );
}
