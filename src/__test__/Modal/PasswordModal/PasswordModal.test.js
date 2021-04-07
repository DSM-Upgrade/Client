import React from "react";

import { useSelector } from "react-redux";

import { render } from "@testing-library/react";

import PasswordModal from "../../../component/Modal/PasswordModal/PasswordModal";

jest.mock("react-redux");

describe("PasswordModal", () => {
  useSelector.mockImplementation((selector) => selector({ error: false }));

  const errorData = {
    state: false,
    text: "",
  };
  const PWInfo = {
    curPW: "",
    newPW: "",
    rePW: "",
    confirmInfo: { state: false, text: "" },
  };
  const ChangePWInfo = jest.fn();
  const ConfirmPWInfo = jest.fn();
  const ModalOff = jest.fn();
  const PreventModalOff = jest.fn();

  it("match snapshot", () => {
    const { container } = render(
      <PasswordModal
        errorData={errorData}
        PWInfo={PWInfo}
        ChangePWInfo={ChangePWInfo}
        ConfirmPWInfo={ConfirmPWInfo}
        ModalOff={ModalOff}
        PreventModalOff={PreventModalOff}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it(`render "비밀번호 변경" text in PasswordModal`, () => {
    const { getByText } = render(
      <PasswordModal
        errorData={errorData}
        PWInfo={PWInfo}
        ChangePWInfo={ChangePWInfo}
        ConfirmPWInfo={ConfirmPWInfo}
        ModalOff={ModalOff}
        PreventModalOff={PreventModalOff}
      />
    );

    getByText("비밀번호 변경");
  });
});
