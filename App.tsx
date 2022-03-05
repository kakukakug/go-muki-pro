import React, { useState } from "react";
import { useColorScheme } from "react-native";
import AppLoading from "expo-app-loading";
import { Provider as ReduxProvider } from "react-redux";
import * as Font from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

import { Colors, darkColors } from "./src/04_external/styles/Colors";

import { rootStore } from "./src/01_entity/redux/store";
import { MainNavigator } from "./src/04_external/navigation/AppNavigator";

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      star: string;
      secondary: string;
      delete: string;
    }
    interface Theme {
      shadow: {};
    }
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  shadow: {
    offset: 1,
  },
  colors: {
    ...Colors,
  },
};
const themeDark = {
  ...DefaultTheme,
  roundness: 2,
  shadow: {
    offset: 1,
  },
  colors: {
    ...darkColors,
  },
};

type OuterProps = { skipLoadingScreen: boolean };

export default function App(props: OuterProps) {
  const { skipLoadingScreen } = props;
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const scheme = useColorScheme();

  const loadResourcesAsync = async () => {
    await SplashScreen.preventAutoHideAsync();
    await Promise.all([
      Font.loadAsync({
        ...MaterialIcons.font,
        // eslint-disable-next-line global-require
        "round-mb": require("./src/04_external/assets/font/MPLUSRounded1c-Bold.ttf"),
      }),
    ]);
  };

  const handleLoadingError = (error: Error) => {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    // eslint-disable-next-line no-console
    console.warn(error);
  };
  const handleFinishLoading = async () => {
    setLoadingComplete(true);
    await SplashScreen.hideAsync();
  };

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => {
          handleFinishLoading();
        }}
        autoHideSplash={false}
      />
    );
  }
  return (
    <SafeAreaProvider>
      <ReduxProvider store={rootStore}>
        <PaperProvider theme={scheme === "dark" ? themeDark : theme}>
          <MainNavigator />
        </PaperProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
