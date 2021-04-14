import React from "react";

import { useSelector } from "react-redux";

import { render, fireEvent, createEvent } from "@testing-library/react";

import FineModalContainer from "../../../../container/Modal/FineModalContainer/FineModalContainer";

import { fineData } from "../../../../fixtures/Modal/FineModalFineData";

jest.mock("react-redux");

describe("FindModalContainer", () => {
  useSelector.mockImplementation((selector) => selector({ fineData }));

  const setUp = () => {
    const utils = render(<FineModalContainer />);

    return { utils };
  };

  it("render", () => {
    const {
      utils: { getByText },
    } = setUp();

    expect(getByText("내 벌금내역"));
  });

  it("click preventModalOff", () => {
    const {
      utils: { getByTestId },
    } = setUp();

    const fineModalElement = getByTestId("fine-modal-element");
    const mockClickEvent = createEvent.click(fineModalElement);

    expect(mockClickEvent.defaultPrevented).toBeFalsy();

    fireEvent(fineModalElement, mockClickEvent);

    expect(mockClickEvent.defaultPrevented).toBeTruthy();
  });
});
