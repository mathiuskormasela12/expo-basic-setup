import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import AccountScreen from "../AccountScreen";
import AddPostScreen from "../AddPostScreen";
import PostScreen from "../PostScreen";
import SearchAccountScreen from "../SearchAccountScreen";

import { BottomStackParamList } from "@/src/types/router.types";

const BottomStack = createBottomTabNavigator<BottomStackParamList>();

const MyBottomTabsScreen: React.FC = () => {
  return (
    <BottomStack.Navigator
      initialRouteName="PostScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          title: "Post",
        }}
      />
      <BottomStack.Screen
        name="SearchAccountScreen"
        component={SearchAccountScreen}
        options={{
          title: "Search",
        }}
      />
      <BottomStack.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{
          title: "Add Post",
        }}
      />
      <BottomStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          title: "Account",
        }}
      />
    </BottomStack.Navigator>
  );
};

export default MyBottomTabsScreen;
