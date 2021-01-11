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

  it("should primary theme render", () => {
    const { getByTestId } = render(<StylishComponent theme="primary" />);

    const container = getByTestId("container");
    expect(container).toHaveClass("theme-primary");
  });

  it("should secondary theme render", () => {
    const { getByTestId } = render(<StylishComponent theme="secondary" />);

    const container = getByTestId("container");
    expect(container).toHaveClass("theme-secondary");
  });
});
