import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../../01_entity/redux/store";

import { getFavoData, setFavoData } from "../../../../02_usecase/action/favo";

import { BannerAd } from "../../01_atoms/Ads";

import { DIContainer } from "../../../../main/di_container";

const { favoRepo } = DIContainer.shared();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export const FavoriteScreen = () => {
  const dispatch = useDispatch();

  const favoData = useSelector((state: RootState) => {
    return state.favoriteReducer;
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const initFavoData = async () => {
      if (favoData.requestState === "notYet") {
        await getFavoData(dispatch)(favoRepo);
      }
      setIsLoading(false);
    };
    initFavoData();
    setIsLoading(false);
  }, [dispatch, favoData.requestState]);

  const onPress = () => {
    setFavoData(dispatch)(
      [...favoData.favo, { id: "1", name: "name", flg: false }],
      favoRepo
    );
  };

  return (
    <>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Button onPress={onPress}>favo</Button>
        )}
      </View>
      <BannerAd />
    </>
  );
};
