import React from "react";
import { Text, Button } from "react-native";

import { SafeAreaView } from "@/src/components";
import { useRegister } from "@/src/hooks";

const PostScreen: React.FC = () => {
  const { accessToken, handleToken, accessTokenTemp, handleTokenTemp } =
    useRegister();

  return (
    <SafeAreaView>
      <Text>Post Screen</Text>
      <Text>Persisted</Text>
      <Button
        title={accessToken.length > 0 ? "Authorized" : "Unauthorized"}
        onPress={handleToken}
      />
      <Text>Non Persisted</Text>
      <Button
        title={accessTokenTemp.length > 0 ? "Authorized" : "Unauthorized"}
        onPress={handleTokenTemp}
      />
    </SafeAreaView>
  );
};

export default PostScreen;
