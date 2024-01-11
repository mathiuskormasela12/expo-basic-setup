/* eslint-disable no-undef */
const fs = require("fs/promises");
const path = require("path");
const process = require("process");

const env = process.argv[2] ?? "development";

const generateEasConfig = async () => {
  try {
    let envFile = await fs.readFile(
      path.join(__dirname, "../env.json"),
      "utf-8",
    );
    envFile = JSON.parse(envFile);

    const eas = {
      cli: {
        version: ">= 5.9.3",
      },
      build: {
        "development-debug": {
          developmentClient: true,
          distribution: "internal",
          android: {
            buildType: "apk",
          },
          ios: {
            simulator: true,
          },
          env: {
            APP_VARIANT: "development",
          },
        },
        "development-release": {
          distribution: "internal",
          android: {
            buildType: "apk",
          },
          ios: {
            simulator: true,
          },
          env: {
            APP_VARIANT: "development",
          },
        },
        "staging-debug": {
          developmentClient: true,
          distribution: "internal",
          android: {
            buildType: "apk",
          },
          ios: {
            simulator: true,
          },
          env: {
            APP_VARIANT: "staging",
          },
        },
        "staging-release": {
          distribution: "internal",
          android: {
            buildType: "apk",
          },
          ios: {
            simulator: true,
          },
          env: {
            APP_VARIANT: "staging",
          },
        },
        "production-debug": {
          developmentClient: true,
          distribution: "internal",
          android: {
            buildType: "apk",
          },
          ios: {
            simulator: true,
          },
          env: {
            APP_VARIANT: "production",
          },
        },
        "production-release": {
          distribution: "internal",
          android: {
            buildType: "apk",
          },
          ios: {
            simulator: true,
          },
          env: {
            APP_VARIANT: "production",
          },
        },
      },
      submit: {
        production: {},
      },
    };

    for (const item in eas.build) {
      if (String(item).startsWith(env)) {
        eas.build[item] = {
          ...eas.build[item],
          env: {
            ...eas.build[item].env,
            ...envFile[env],
          },
        };
      }
    }

    let localEnv = "#do not touch this file.\n";

    for (const item in envFile[env]) {
      localEnv += item;
      localEnv += "=";
      localEnv += envFile[env][item];
      localEnv += "\n";
    }

    try {
      await Promise.all([
        fs.writeFile(
          path.join(__dirname, "../eas.json"),
          JSON.stringify(eas, null, 2),
        ),
        fs.writeFile(path.join(__dirname, "../.env"), localEnv),
      ]);
      console.info("eas.json and .env are created");
    } catch (err) {
      console.error(err);
    }
  } catch (err) {
    console.error(err);
  }
};

generateEasConfig();
