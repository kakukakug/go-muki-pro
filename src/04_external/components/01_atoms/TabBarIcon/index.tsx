import React from "react";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Colors } from "../../../styles/Colors";

type OuterProps = {
  name: string;
  color: string;
  focused: boolean;
};
const styles = StyleSheet.create({
  tabBarIcon: { marginBottom: -3 },
});

export const TabBarIcon = (props: OuterProps) => {
  const { name, focused, color } = props;
  return (
    <MaterialIcons
      name={name}
      size={26}
      style={styles.tabBarIcon}
      color={focused ? color : Colors.textTertiary}
    />
  );
};
