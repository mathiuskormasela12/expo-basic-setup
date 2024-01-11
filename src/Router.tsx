import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { MyBottomTabsScreen, RegisterScreen } from "./screens";
import { RootStackParamList } from "./types/router.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyBottomTabsScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="MyBottomTabsScreen"
          component={MyBottomTabsScreen}
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
