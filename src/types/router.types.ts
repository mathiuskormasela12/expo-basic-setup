import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  MyBottomTabsScreen: undefined;
  RegisterScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type BottomStackParamList = {
  PostScreen: undefined;
  SearchAccountScreen: undefined;
  AddPostScreen: undefined;
  AccountScreen: undefined;
};

export type BottomStackScreenProps<T extends keyof BottomStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
