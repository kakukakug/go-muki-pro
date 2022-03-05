import React from "react";
import { render } from "@testing-library/react-native";

import { NavButton } from "../../../../src/04_external/components/01_atoms/NavButton";

describe("NavButton", () => {
  it(`NavButtonを描写`, () => {
    const mockOnPress = jest.fn();
    const component = render(<NavButton onPress={mockOnPress} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
