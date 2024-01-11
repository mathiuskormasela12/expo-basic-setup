import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

import { useRegister } from "../../hooks";

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
