import React, { useRef, useCallback } from "react";
// import { setCurrentScreen, setDebugModeEnabled } from "expo-firebase-analytics";
import {
  NavigationContainer,
  NavigationContainerRef,
  DefaultTheme,
} from "@react-navigation/native";

import { MainNavigationComponent } from "./MainNavigationComponent";

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "#922",
    card: "#fdd",
  },
};

export const MainNavigator = () => {
  // https://reactnavigation.org/docs/screen-tracking
  const routeNameRef = useRef<string | undefined>();
  const navigationRef = useRef<NavigationContainerRef>(null);
  const onReady = useCallback(() => {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
    // setCurrentScreen("Home");
  }, []);

  if (__DEV__) {
    // console.log("debug mode on");
    // setDebugModeEnabled(true);
  }

  const onStateChange = useCallback(async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    if (currentRouteName && previousRouteName !== currentRouteName) {
      // await setCurrentScreen(currentRouteName);
    }

    routeNameRef.current = currentRouteName;
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      independent={true}
      onReady={onReady}
      onStateChange={onStateChange}
      theme={navigationTheme}>
      <MainNavigationComponent />
    </NavigationContainer>
  );
};
