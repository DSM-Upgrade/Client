import React from "react";

import { render, fireEvent } from "@testing-library/react";

import FineModalContainer from "../../../container/Modal/FineModalContainer/FineModalContainer";
import ModalWrapper from "../../../component/ModalWrapper/ModalWrapper";

describe("ModalWrapper", () => {
  const modalOff = jest.fn();
  const modalData = {
    isShow: true,
    error: {
      state: false,
      text: "",
    },
    modalElement: FineModalContainer,
  };

  const setUp = () => {
    const utils = render(
      <ModalWrapper modalData={modalData} modalOff={modalOff} />
    );

    return { utils };
  };

  it("test render temp Modal, FineModalContainer", () => {
    const {
      utils: { getByText },
    } = setUp();

    getByText("내 벌금내역");
  });

  it("click modalOff", () => {
    const {
      utils: { getByTestId },
    } = setUp();

    const modalWrapperContainerElement = getByTestId("modal-wrapper-container");

    expect(modalOff).toHaveBeenCalledTimes(0);

    fireEvent.click(modalWrapperContainerElement);

    expect(modalOff).toHaveBeenCalledTimes(1);
  });
});
