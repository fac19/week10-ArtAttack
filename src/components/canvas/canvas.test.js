import React from "react";
import { render } from "@testing-library/react";
import "jest-canvas-mock";
import Canvas from "./canvas";

test("Canvas component renders", () => {
  const { getByText } = render(<Canvas />);
  getByText("Can you beat the clock?");
});
