import React from "react";

import { useSelector } from "react-redux";

import { render } from "@testing-library/react";

import FineModalContainer from "../../container/Modal/FineModalContainer/FineModalContainer";

import { fineData } from "../../fixtures/Modal/FineModalFineData";

jest.mock("react-redux");

describe("FindModalContainer", () => {
  useSelector.mockImplementation((selector) => selector({ fineData }));

  it('click "PreventModalOff" once', () => {
    const { getByText } = render(<FineModalContainer />);

    expect(getByText("내 벌금내역"));
  });
});
