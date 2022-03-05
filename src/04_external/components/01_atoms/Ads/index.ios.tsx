import React from "react";
import { View, StyleSheet } from "react-native";
import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob";

import { DIContainer } from "../../../../main/di_container";
import { Colors } from "../../../styles/Colors";

const { dotenvRepo } = DIContainer.shared();
const styles = StyleSheet.create({
  bannerAd: {
    borderBottomWidth: 8,
    borderTopWidth: 8,
    borderColor: Colors.background,
  },
});

export const BannerAd = () => {
  const bannerError = () => {
    // eslint-disable-next-line no-console
    console.log("Ad Fail error");
  };

  return (
    <View style={styles.bannerAd}>
      <AdMobBanner
        adUnitID={dotenvRepo.IOS_BANNER_AD_UNIT_ID}
        onDidFailToReceiveAdWithError={bannerError}
      />
    </View>
  );
};

export const InterstitialAd = async () => {
  try {
    AdMobInterstitial.setAdUnitID(dotenvRepo.IOS_INTERSTITIAL_AD_UNIT_ID);
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
