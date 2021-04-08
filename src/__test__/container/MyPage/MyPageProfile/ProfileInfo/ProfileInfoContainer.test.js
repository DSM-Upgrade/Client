import React from "react";

import { useDispatch } from "react-redux";

import { render, fireEvent } from "@testing-library/react";

import ProfileInfoContainer from "../../../../../container/MyPageContanier/MyPageProfile/ProfileInfo/ProfileInfoContainer";

jest.mock("react-redux");

const setUp = () => {
  const utils = render(<ProfileInfoContainer />);

  return { utils };
};

describe("<ProfileInfoContainer />", () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it("snapshot", () => {
    const {
      utils: { container },
    } = setUp();
    expect(container).toMatchSnapshot();
  });

  it("has text and button", () => {
    const {
      utils: { getByText },
    } = setUp();

    getByText("이름");
    getByText("학번");
    getByText("분야");
    getByText("아이디");
    getByText("비밀번호");

    getByText("변경사항 저장");
  });

  it("enables button when studentNum is changed", () => {
    const {
      utils: { getByLabelText, getByText },
    } = setUp();

    const studentNum = getByLabelText("학번");
    const field = getByLabelText("분야");
    const completeButton = getByText("변경사항 저장");

    expect(completeButton.disabled).toBe(true);

    fireEvent.change(studentNum, { target: { value: "3411" } });

    expect(completeButton.disabled).toBe(false);
  });

  it("enables button when field is changed", () => {
    const {
      utils: { getByLabelText, getByText },
    } = setUp();

    const field = getByLabelText("분야");
    const completeButton = getByText("변경사항 저장");

    expect(completeButton.disabled).toBe(true);

    fireEvent.change(field, { target: { value: "ios" } });

    expect(completeButton.disabled).toBe(false);
  });

  it("enable change value", () => {
    const {
      utils: { getByLabelText },
    } = setUp();

    const studentNum = getByLabelText("학번");
    const field = getByLabelText("분야");

    fireEvent.change(studentNum, { target: { value: "3411" } });
    expect(studentNum.value).toBe("3411");

    fireEvent.change(field, { target: { value: "ios" } });
    expect(field.value).toBe("ios");
  });

  it("click modalOn then dispatch has been clicked", () => {
    const {
      utils: { getByText },
    } = setUp();

    const modalOnClickButton = getByText("수정");

    expect(dispatch).toHaveBeenCalledTimes(0);

    fireEvent.click(modalOnClickButton);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
