import React from "react";

import { render } from "@testing-library/react";

import PasswordModal from "../../../../component/Modal/PasswordModal/PasswordModal";

describe("PasswordModal", () => {
  const errorInfoData = {
    state: false,
    text: "",
  };
  const pwInfoData = {
    curPW: "",
    newPW: "",
    rePW: "",
    confirmInfo: { state: false, text: "" },
  };
  const changePWInfo = jest.fn();
  const confirmPWInfo = jest.fn();
  const modalOff = jest.fn();
  const preventModalOff = jest.fn();

  const setUp = (options) => {
    const { errorData, pwInfo } = {
      errorData: options?.errorInfoData || errorInfoData,
      pwInfo: options?.pwInfoData || pwInfoData,
    };

    const utils = render(
      <PasswordModal
        errorData={errorData}
        pwInfo={pwInfo}
        changePWInfo={changePWInfo}
        confirmPWInfo={confirmPWInfo}
        modalOff={modalOff}
        preventModalOff={preventModalOff}
      />
    );

    return { utils };
  };

  it("match snapshot", () => {
    const {
      utils: { container },
    } = setUp();

    expect(container).toMatchSnapshot();
  });

  it(`render "비밀번호 변경" text in PasswordModal`, () => {
    const {
      utils: { getByText },
    } = setUp();

    getByText("비밀번호 변경");
  });

  it("render with error", () => {
    const {
      utils: { getByText },
    } = setUp({
      errorInfoData: { state: true, text: "fatal error!" },
    });

    getByText("fatal error!");
  });

  it("render with confirmInfo error", () => {
    const {
      utils: { getByText },
    } = setUp({
      pwInfoData: {
        curPW: "",
        newPW: "",
        rePW: "",
        confirmInfo: { state: true, text: "fatal error..." },
      },
    });

    getByText("fatal error...");
  });
});
