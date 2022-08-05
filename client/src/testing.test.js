import React from "react";
import { render } from "@testing-library/react";
import Workflow from "./Workflow";

describe("Test", () => {
  test("rendering", () => {
    const { getByTestId } = render(<Workflow />);
    expect(getByTestId("content")).toBeInTheDocument;
  });
});

// i never understood testing in the slightest so i got this from https://medium.com/swlh/a-beginners-guide-for-testing-react-function-component-part-i-5c2ceef3fbde
