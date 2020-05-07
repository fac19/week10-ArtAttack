import React from "react";
import { render } from "@testing-library/react";
import Display from "./displayartwork";

test("Display component renders", () => {
  const { getByText } = render(<Display />);
  getByText("Loading..");
});
