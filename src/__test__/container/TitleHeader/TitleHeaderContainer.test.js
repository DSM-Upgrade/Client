import React from "react";

import { render } from "@testing-library/react";

import TitleHeaderContainer from "../../../container/TitleHeaderContainer/TitleHeaderContainer";

describe("TitleHeaderContainer", () => {
  it.each`
    text           | expected
    ${""}          | ${["U", "ntitled"]}
    ${"X"}         | ${"X"}
    ${"SmallStar"} | ${["S", "mallStar"]}
  `("text branch test", ({ text, expected }) => {
    const { getByText } = render(<TitleHeaderContainer text={text} />);

    if (Array.isArray(expected)) {
      expected.forEach((expectText) => getByText(expectText));
    } else {
      getByText(expected);
    }
  });
});
