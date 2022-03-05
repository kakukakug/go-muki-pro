import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";

import { BannerAd } from "../../01_atoms/Ads";

const styles = StyleSheet.create({
  searchArea: {
    flexDirection: "row",
    padding: 10,
    flex: 1,
  },
  searchInput: {
    flex: 1,
  },
});

export const SearchScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <View style={styles.searchArea} testID="search">
        <View style={styles.searchInput}>
          <TextInput
            mode="outlined"
            label="名前を入力"
            value={search}
            onChangeText={(text) => {
              setSearch(text);
            }}
            testID="searchScreen"
          />
        </View>
      </View>
      <BannerAd />
    </>
  );
};
