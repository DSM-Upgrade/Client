import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ProfileInfoContainer from "../../../../container/MyPageContanier/MyPageProfile/ProfileInfo/ProfileInfoContainer";
import { Provider } from "react-redux";
import store from "../../../../module/store";

const setUp = () => {
  const utils = render(
    <Provider store={store}>
      <ProfileInfoContainer />
    </Provider>
  );

  return utils;
};

describe("<ProfileInfoContainer />", () => {
  it("snapshot", () => {
    const { container } = setUp();
    expect(container).toMatchSnapshot();
  });

  it("has text and button", () => {
    const { getByText } = setUp();

    getByText("이름");
    getByText("학번");
    getByText("분야");
    getByText("아이디");
    getByText("비밀번호");

    getByText("변경사항 저장");
  });

  it("enables button when studentNum is changed", () => {
    const { getByLabelText, getByText } = setUp();

    const studentNum = getByLabelText("학번");
    const field = getByLabelText("분야");
    const completeButton = getByText("변경사항 저장");

    expect(completeButton.disabled).toBe(true);

    fireEvent.change(studentNum, { target: { value: "3411" } });

    expect(completeButton.disabled).toBe(false);
  });

  it("enables button when field is changed", () => {
    const { getByLabelText, getByText } = setUp();

    const field = getByLabelText("분야");
    const completeButton = getByText("변경사항 저장");

    expect(completeButton.disabled).toBe(true);

    fireEvent.change(field, { target: { value: "ios" } });

    expect(completeButton.disabled).toBe(false);
  });

  it("enable change value", () => {
    const { getByLabelText } = setUp();

    const studentNum = getByLabelText("학번");
    const field = getByLabelText("분야");

    fireEvent.change(studentNum, { target: { value: "3411" } });
    expect(studentNum.value).toBe("3411");

    fireEvent.change(field, { target: { value: "ios" } });
    expect(field.value).toBe("ios");
  });

  // it("show PasswordModal when click modifyButton", () => {
  //   const { getByText } = setUp();

  //   const modifyButton = getByText("수정");

  //   fireEvent.click(modifyButton);

  //   findByText("비밀번호 변경");
  //   findByText("비밀번호 인증");
  //   findByPlaceholderText("현재 비밀번호");
  //   findByPlaceholderText("새 비밀번호");
  //   findByPlaceholderText("새 비밀번호 확인");
  //   findByText("확인");
  //   findByText("취소");
  // });
});
