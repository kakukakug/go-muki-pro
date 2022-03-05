import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  Text,
  Linking,
} from "react-native";

import { Colors } from "../../../styles/Colors";

const licenseList: LicenseList = require("../../../common/licenses.json");

const styles = StyleSheet.create({
  mainView: {},
  contentContainer: {
    paddingBottom: 240,
  },
  container: {},
  licenseItem: {
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 14,
    backgroundColor: Colors.white,
  },
  packageName: {
    marginBottom: 4,
    fontSize: 18,
  },
  license: {
    color: Colors.text,
    fontSize: 14,
  },
  url: {
    color: Colors.url,
    fontSize: 14,
  },
});

type License = {
  id: number;
  name: string;
  version: string;
  license: string;
  repository: string;
  author: string;
  homepage: string;
  dependencyLevel: string;
};
type LicenseList = License[];
// interface LicenseFile {
// [key: string]: any;
// }

export const LicensesScreen = () => {
  const keyExtractor = (item: License) => {
    const { id } = item;
    return String(id);
  };

  const openUrl = (url: string) => {
    Linking.openURL(url);
  };

  const LicenseItem = (props: {
    packageItem: License;
    onPress: (url: string) => void;
  }) => {
    const { packageItem, onPress } = props;
    const { name, license, homepage } = packageItem;
    return (
      <TouchableOpacity
        style={styles.licenseItem}
        onPress={() => {
          onPress(homepage);
        }}>
        <Text style={styles.packageName}>{name}</Text>
        <Text style={styles.license}>{license}</Text>
        <Text style={styles.url}>{homepage}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={licenseList}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => {
          return <LicenseItem packageItem={item} onPress={openUrl} />;
        }}
        style={styles.mainView}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};
