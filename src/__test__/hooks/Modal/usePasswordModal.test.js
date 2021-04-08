import { act } from "react-dom/test-utils";

import { renderHook } from "@testing-library/react-hooks";

import { usePasswordModal } from "../../../hooks/Modal/usePasswordModal";

describe("usePasswordModal", () => {
  it("test changePwInfo curPW, newPW, rePW ", () => {
    const { result } = renderHook(() => usePasswordModal());

    act(() => {
      result.current.changePwInfo({
        target: { name: "curPW", value: "password" },
      });
      result.current.changePwInfo({
        target: { name: "newPW", value: "newPw" },
      });
      result.current.changePwInfo({
        target: { name: "rePW", value: "newPW" },
      });
    });

    expect(result.current.pwInfo).toEqual({
      curPW: "password",
      newPW: "newPw",
      rePW: "newPW",
      confirmInfo: { state: false, text: "" },
    });
  });

  it.each`
    targetName                    | targetValue                                 | expected
    ${""}                         | ${""}                                       | ${{ curPW: "", newPW: "", rePW: "", confirmInfo: { state: true, text: `"현재 비밀번호"란을 입력해주세요.` } }}
    ${"curPW"}                    | ${"password"}                               | ${{ curPW: "password", newPW: "", rePW: "", confirmInfo: { state: true, text: `"새 비밀번호"란을 입력해주세요.` } }}
    ${["curPW", "newPW"]}         | ${["password", "password"]}                 | ${{ curPW: "password", newPW: "password", rePW: "", confirmInfo: { state: true, text: `"새 비밀번호 확인"란을 입력해주세요.` } }}
    ${["curPW", "newPW", "rePW"]} | ${["password", "password", "rePassword"]}   | ${{ curPW: "password", newPW: "password", rePW: "rePassword", confirmInfo: { state: true, text: `비밀번호를 확인해주세요.` } }}
    ${["curPW", "newPW", "rePW"]} | ${["password", "rePassword", "rePassword"]} | ${{ curPW: "password", newPW: "rePassword", rePW: "rePassword", confirmInfo: { state: false, text: `` } }}
  `(
    "test confirmPwInfo pwInfo.confirmInfo.text ",
    ({ targetName, targetValue, expected }) => {
      const { result } = renderHook(() => usePasswordModal());

      if (targetName !== "" && targetValue !== "") {
        if (Array.isArray(targetName)) {
          targetName.forEach((_, forEachIdx) => {
            act(() => {
              result.current.changePwInfo({
                target: {
                  name: targetName[forEachIdx],
                  value: targetValue[forEachIdx],
                },
              });
            });
          });
        } else {
          act(() => {
            result.current.changePwInfo({
              target: { name: targetName, value: targetValue },
            });
          });
        }
      }

      act(() => {
        result.current.confirmPwInfo();
      });

      expect(result.current.pwInfo).toEqual(expected);
    }
  );
});
