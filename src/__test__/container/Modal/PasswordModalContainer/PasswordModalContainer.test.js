import React from "react";

import { useSelector } from "react-redux";

import { render } from "@testing-library/react";

import PasswordModalContainer from "../../../../container/Modal/PasswordModalContainer/PasswordModalContainer";

jest.mock("react-redux");

describe("PasswordModalContainer", () => {
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

  it('click "PreventModalOff" once', () => {
    const {
      utils: { getByText },
    } = setUp();

    expect(getByText("비밀번호 변경"));
  });
});
