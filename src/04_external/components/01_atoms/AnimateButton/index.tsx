import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

export const AnimateButton = () => {
  const { colors } = useTheme();

  const offset = useSharedValue(16);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      fontSize: offset.value,
      padding: 10,
    };
  });

  const onPress = () => {
    offset.value = withTiming(40, {
      duration: 500,
      easing: Easing.out(Easing.exp),
    });
  };

  return (
    <>
      <TouchableOpacity testID="navButton" onPress={onPress}>
        <Animated.Text style={[{ color: colors.text }, animatedStyles]}>
          press me
        </Animated.Text>
      </TouchableOpacity>
    </>
  );
};
