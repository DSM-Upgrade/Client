import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { usePasswordModal } from "../../../hooks/Modal/usePasswordModal";

describe("usePasswordModal", () => {
  it("test ChangePWInfo curPW, newPW, rePW ", () => {
    const { result } = renderHook(() => usePasswordModal());

    act(() => {
      result.current.ChangePWInfo({
        target: { name: "curPW", value: "password" },
      });
      result.current.ChangePWInfo({
        target: { name: "newPW", value: "newPw" },
      });
      result.current.ChangePWInfo({
        target: { name: "rePW", value: "newPW" },
      });
    });

    expect(result.current.PWInfo).toEqual({
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
    "test ConfirmPWInfo PWInfo.confirmInfo.text ",
    ({ targetName, targetValue, expected }) => {
      const { result } = renderHook(() => usePasswordModal());

      if (targetName !== "" && targetValue !== "") {
        if (Array.isArray(targetName)) {
          targetName.forEach((_, forEachIdx) => {
            act(() => {
              result.current.ChangePWInfo({
                target: {
                  name: targetName[forEachIdx],
                  value: targetValue[forEachIdx],
                },
              });
            });
          });
        } else {
          act(() => {
            result.current.ChangePWInfo({
              target: { name: targetName, value: targetValue },
            });
          });
        }
      }

      act(() => {
        result.current.ConfirmPWInfo();
      });

      expect(result.current.PWInfo).toEqual(expected);
    }
  );
});
