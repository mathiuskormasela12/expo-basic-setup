import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ISafeAreaView } from "@/src/types";

const SafeAreaView: React.FC<ISafeAreaView> = ({ children, style }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        top: insets.top,
        bottom: insets.bottom,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default SafeAreaView;
