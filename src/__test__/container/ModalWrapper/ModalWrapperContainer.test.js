import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { render, fireEvent } from "@testing-library/react";

import ModalWrapperContainer from "../../../container/ModalWrapper/ModalWrapperContainer";
import FineModalContainer from "../../../container/Modal/FineModalContainer/FineModalContainer";

jest.mock("react-redux");

describe("ModalWrapperContainer", () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((seletor) =>
    seletor({
      modal: {
        isShow: true,
        error: {
          state: false,
          text: "",
        },
        modalElement: FineModalContainer,
      },
    })
  );

  it("test render temp Modal, FineModalContainer", () => {
    const { getByText } = render(<ModalWrapperContainer />);

    getByText("내 벌금내역");
  });

  it("click modalOff in dispatch", () => {
    const { getByTestId } = render(<ModalWrapperContainer />);

    const modalWrapperContainerElement = getByTestId("modal-wrapper-container");

    expect(dispatch).toHaveBeenCalledTimes(0);

    fireEvent.click(modalWrapperContainerElement);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
