// InputDisplay.test.js
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import InputDisplay from "./InputDisplay";

test("displays the text entered into the input field", () => {
  render(<InputDisplay />);

  // Find elements by their data-testid attribute
  const inputElement = screen.getByTestId("input-field");
  const displayDiv = screen.getByTestId("display-div");

  // Check initial state
  expect(displayDiv.textContent).toBe("");

  // Simulate typing in the input field
  fireEvent.change(inputElement, { target: { value: "Hello, world!" } });

  // Check that the div displays the new text
  expect(displayDiv.textContent).toBe("Hello, world!");
});
