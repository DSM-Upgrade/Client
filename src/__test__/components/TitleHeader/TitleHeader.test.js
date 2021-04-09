import React from "react";

import { render } from "@testing-library/react";
import TitleHeader from "../../../component/TitleHeader/TitleHeader";

describe("TitleHeader", () => {
  it.each`
    firstChar | otherChar     | expectFirstChar | expectOtherChar
    ${""}     | ${""}         | ${false}        | ${false}
    ${"X"}    | ${""}         | ${true}         | ${false}
    ${"S"}    | ${"mallStar"} | ${true}         | ${true}
  `(
    "render firstChar and otherChar",
    ({ firstChar, otherChar, expectFirstChar, expectOtherChar }) => {
      const { getByText } = render(
        <TitleHeader
          firstChar={{ current: firstChar }}
          otherChar={{ current: otherChar }}
        />
      );

      if (expectFirstChar) {
        getByText(firstChar);
      }
      if (expectOtherChar) {
        getByText(otherChar);
      }
    }
  );
});
