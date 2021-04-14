import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { render, fireEvent, createEvent } from "@testing-library/react";

import PasswordModalContainer from "../../../../container/Modal/PasswordModalContainer/PasswordModalContainer";

jest.mock("react-redux");

describe("PasswordModalContainer", () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({ modal: { error: false } })
  );

  const setUp = () => {
    const utils = render(<PasswordModalContainer />);

    return { utils };
  };

  it(`match snapshot`, () => {
    const {
      utils: { container },
    } = setUp();

    expect(container).toMatchSnapshot();
  });

  it("render", () => {
    const {
      utils: { getByText },
    } = setUp();

    expect(getByText("비밀번호 변경"));
  });

  it('click "preventModalOff" once', () => {
    const {
      utils: { getByText },
    } = setUp();

    const modalOffElement = getByText("취소");

    expect(dispatch).toHaveBeenCalledTimes(0);

    fireEvent.click(modalOffElement);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it("click preventModalOff", () => {
    const {
      utils: { getByTestId },
    } = setUp();

    const passwordModalElement = getByTestId("password-modal-element");
    const mockClickEvent = createEvent.click(passwordModalElement);

    expect(mockClickEvent.defaultPrevented).toBeFalsy();

    fireEvent(passwordModalElement, mockClickEvent);

    expect(mockClickEvent.defaultPrevented).toBeTruthy();
  });
});
