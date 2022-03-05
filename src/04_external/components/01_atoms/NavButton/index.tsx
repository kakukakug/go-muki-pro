import React from "react";
import { Button } from "react-native-paper";

type OuterProps = {
  onPress: () => void;
};

export const NavButton = (props: OuterProps) => {
  const { onPress } = props;
  return (
    <>
      <Button testID="navButton" onPress={onPress}>
        search
      </Button>
    </>
  );
};
