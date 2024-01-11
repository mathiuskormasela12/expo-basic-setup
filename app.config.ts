import { ExpoConfig } from "expo/config";

import { APP_VARIANT } from "./src/types";

const appVariant = (process.env?.APP_VARIANT ?? "development") as APP_VARIANT;
const appName = process.env?.EXPO_PUBLIC_APP_NAME ?? "Unsiagram (Default)";
const appVersion = process.env?.EXPO_PUBLIC_APP_VERSION ?? "1.0.0";
const appBuildNumber = process.env?.EXPO_PUBLIC_APP_BUILD_NUMBER ?? "1";
let appId = "com.unsia.unsiagram.dev";

switch (appVariant) {
  case "production":
    appId = "com.unsia.unsiagram";
    break;
  case "staging":
    appId = "com.unsia.unsiagram.stg";
    break;
  default:
    appId = "com.unsia.unsiagram.dev";
}

const config: ExpoConfig = {
  name: appName,
  slug: "mobile-fe-unsiagram",
  version: appVersion,
  orientation: "portrait",
  icon: `./assets/${appVariant}/icon.png`,
  userInterfaceStyle: "light",
  splash: {
    image: `./assets/${appVariant}/splash.png`,
    backgroundColor: "#ffffff",
    resizeMode: "cover",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: appId,
    buildNumber: appBuildNumber,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: `./assets/${appVariant}/adaptive-icon.png`,
      backgroundColor: "#ffffff",
    },
    package: appId,
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    eas: {
      projectId: "54173b5f-e787-4d36-8102-f9a31433f227",
    },
  },
};

export default config;
