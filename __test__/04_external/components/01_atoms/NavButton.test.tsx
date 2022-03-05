import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { NavButton } from "../../../../src/04_external/components/01_atoms/NavButton";

describe("NavButton", () => {
  it(`search Buttonをタップする`, () => {
    const mockOnPress = jest.fn();
    const component = render(<NavButton onPress={mockOnPress} />);

    const button = component.getByText("search");
    expect(button).toBeTruthy();

    fireEvent.press(button);

    expect(mockOnPress).toBeCalled();
  });
});
