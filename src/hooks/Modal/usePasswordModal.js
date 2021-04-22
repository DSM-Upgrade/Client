import { useState, useCallback } from "react";

import { areEqual, parameterIsEmpty } from "../../utils/parameterUtils";

export const usePasswordModal = () => {
  const [pwInfo, setPwInfo] = useState({
    curPW: "",
    newPW: "",
    rePW: "",
    confirmInfo: { state: false, text: "" },
  });

  const changePwInfo = useCallback(
    (e) => {
      const { name, value } = e.target;
      setPwInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [pwInfo]
  );
  const pwInfoWithUpdateConfirmInfo = useCallback(() => {
    const confirmInfo = confirmInfoVertifiedPwInfo();

    setPwInfo((prev) => ({
      ...prev,
      confirmInfo,
    }));
  }, []);
  const confirmInfoVertifiedPwInfo = useCallback(() => {
    const { curPW, newPW, rePW } = pwInfo;
    const confirmInfo = {
      state: false,
      text: "",
    };

    if (parameterIsEmpty(curPW)) {
      confirmInfo = {
        state: true,
        text: `"현재 비밀번호"란을 입력해주세요.`,
      };
    } else if (parameterIsEmpty(newPW)) {
      confirmInfo = {
        state: true,
        text: `"새 비밀번호"란을 입력해주세요.`,
      };
    } else if (parameterIsEmpty(rePW)) {
      confirmInfo = {
        state: true,
        text: `"새 비밀번호 확인"란을 입력해주세요.`,
      };
    } else if (!areEqual(newPW, rePW)) {
      confirmInfo = {
        state: true,
        text: "비밀번호를 확인해주세요.",
      };
    }

    return confirmInfo;
  }, [pwInfo]);

  return {
    pwInfo,
    setPwInfo,
    changePwInfo,
    confirmInfoVertifiedPwInfo,
    pwInfoWithUpdateConfirmInfo,
  };
};
