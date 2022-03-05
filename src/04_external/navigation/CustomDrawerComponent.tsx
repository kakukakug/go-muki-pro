import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import * as StoreReview from "expo-store-review";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import appIcon from "../assets/images/icon.png";

import { i18n } from "../../03_interface/lib/i18n";
import { Colors } from "../styles/Colors";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  appInfo: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  appIcon: {
    margin: 20,
    width: 50,
    height: 50,
  },
  appTitle: {
    fontSize: 20,
    fontFamily: "round-mb",
  },
  appVersion: {
    fontSize: 16,
  },
  menuComponent: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    color: Colors.secondary,
    marginRight: 4,
  },
  menuText: {
    fontFamily: "round-mb",
  },
});

export const CustomDrawerComponent = ({ navigation }) => {
  return (
    <ScrollView style={styles.safeArea}>
      <SafeAreaView>
        <View style={styles.appInfo}>
          <Image style={styles.appIcon} source={appIcon} />
          <View>
            <Text style={styles.appTitle}>{Constants.manifest.name}</Text>
            <Text style={styles.appVersion}>
              {`Version:${Constants.manifest.version}`}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.menuComponent}
            onPress={() => {
              Linking.openURL("https://honmushi.com/app/policy/");
            }}>
            <MaterialIcons style={styles.menuIcon} size={26} name="policy" />
            <Text style={styles.menuText}>{i18n.t("drawer.policy")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuComponent}
            onPress={() => {
              StoreReview.requestReview();
            }}>
            <MaterialIcons style={styles.menuIcon} size={26} name="comment" />
            <Text style={styles.menuText}>
              {i18n.t("drawer.reviewRequest")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuComponent}
            onPress={() => {
              navigation.navigate("Licenses");
            }}>
            <MaterialIcons style={styles.menuIcon} size={26} name="list" />
            <Text style={styles.menuText}>{i18n.t("drawer.licenses")}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
