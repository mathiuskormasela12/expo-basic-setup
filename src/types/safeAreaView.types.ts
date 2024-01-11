import { PropsWithChildren } from "react";
import { ViewStyle } from "react-native";

export interface ISafeAreaView extends PropsWithChildren {
  style?: ViewStyle | ViewStyle[];
}
