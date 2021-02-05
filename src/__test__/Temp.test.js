import { render } from "@testing-library/react";
import React from "react";
import Temp from "../component/Temp";

describe("<Temp />", () => {
  it("Temp test", () => {
    const { getByText } = render(<Temp />);
    getByText("123");
  });
});
