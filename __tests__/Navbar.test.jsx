import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../components/navbar";

describe("Navbar", () => {
  test("renders navbar with links", () => {
    const { getByTestId, getByText } = render(<Navbar />);

    expect(getByTestId("navbar")).toBeInTheDocument();
    expect(getByText("Rick and Morty")).toBeInTheDocument();
    expect(getByTestId("navbar-home")).toHaveAttribute("href", "#");
    expect(getByTestId("navbar-about")).toHaveAttribute("href", "#");
  });
});
