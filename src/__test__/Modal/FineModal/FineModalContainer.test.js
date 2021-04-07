import React from "react";

import { useSelector } from "react-redux";

import { render } from "@testing-library/react";

import FineModalContainer from "../../../container/Modal/FineModalContainer/FineModalContainer";

import { fineData } from "../../../fixtures/Modal/FineModalFineData";

jest.mock("react-redux");

describe("FindModalContainer", () => {
  useSelector.mockImplementation((selector) => selector({ fineData }));

  const setUp = () => {
    const utils = render(<FineModalContainer />);

    return { utils };
  };

  it(`match snapshot`, () => {
    const {
      utils: { container },
    } = setUp();

    expect(container).toMatchSnapshot();
  });

  it('click "PreventModalOff" once', () => {
    const {
      utils: { getByText },
    } = setUp();

    expect(getByText("내 벌금내역"));
  });
});
