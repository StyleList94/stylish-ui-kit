import React from "react";
import { render } from "@testing-library/react";

import StylishComponent from "../";

describe("<StylishComponent />", () => {
  it("should be render", () => {
    const { getByTestId, getByText } = render(<StylishComponent />);

    const container = getByTestId("container");
    expect(container).toHaveClass("container");
    expect(getByText("Stylish React Package")).toBeInTheDocument();
  });
});
