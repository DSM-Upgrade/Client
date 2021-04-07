import React from "react";

import { render, fireEvent } from "@testing-library/react";

import FineModal from "../../../../component/Modal/FineModal/FineModal";

import { fineData } from "../../../../fixtures/Modal/FineModalFineData";

describe("FineModal", () => {
  const setUp = () => {
    const PreventModalOff = jest.fn();

    const utils = render(
      <FineModal fineData={fineData} PreventModalOff={PreventModalOff} />
    );

    return { utils, PreventModalOff };
  };

  it("match snapshot", () => {
    const {
      utils: { container },
    } = setUp();

    expect(container).toMatchSnapshot();
  });

  it.each`
    source
    ${fineData[0]}
    ${fineData[1]}
  `("render fine modal by fixture fineData", ({ source }) => {
    const {
      utils: { getAllByText },
    } = setUp();

    getAllByText(source.reason);
    getAllByText(`${source.price}원`);
    getAllByText(source.date);
  });

  it('click "PreventModalOff" once', () => {
    const {
      utils: { getByTestId },
      PreventModalOff,
    } = setUp();

    const container = getByTestId("fine-modal--container");

    fireEvent.click(container);

    expect(PreventModalOff).toHaveBeenCalledTimes(1);
  });
});
