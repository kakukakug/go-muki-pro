import React, { useCallback, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";

import { BannerAd } from "src/04_external/components/01_atoms/Ads";
import { AnimateButton } from "external/components/01_atoms/AnimateButton";
// import { BannerAd } from "../../01_atoms/Ads";
import { InfoModal } from "../../03_organisms/InfoModal";
import { NavButton } from "../../01_atoms/NavButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  flexContainer: {
    flex: 1,
  },
});

export const HomeScreen = () => {
  const navigation = useNavigation();
  const goSearch = useCallback(() => {
    navigation.navigate("Search");
  }, [navigation]);

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await requestTrackingPermissionsAsync();
      if (status === "granted") {
        // eslint-disable-next-line no-console
        console.log("Yay! I have user permission to track data");
      }
    };

    if (!__DEV__) {
      requestPermission();
    }
  }, []);

  return (
    <View testID="container" style={styles.container}>
      <View style={styles.flexContainer}>
        <InfoModal />
        <NavButton onPress={goSearch} />
        <AnimateButton />
      </View>
      <BannerAd />
    </View>
  );
};
