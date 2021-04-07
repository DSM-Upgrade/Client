import React, { useCallback, useState } from "react";

export const usePasswordModal = () => {
  const [PWInfo, setPWInfo] = useState({
    curPW: "",
    newPW: "",
    rePW: "",
    confirmInfo: { state: false, text: "" },
  });
  const ChangePWInfo = useCallback(
    (e) => {
      const { name, value } = e.target;
      setPWInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [PWInfo]
  );
  const ConfirmPWInfo = useCallback(() => {
    const { curPW, newPW, rePW } = PWInfo;
    let confirmInfo = {
      state: false,
      text: "",
    };

    if (curPW === "") {
      confirmInfo = {
        state: true,
        text: `"현재 비밀번호"란을 입력해주세요.`,
      };
    } else if (newPW === "") {
      confirmInfo = {
        state: true,
        text: `"새 비밀번호"란을 입력해주세요.`,
      };
    } else if (rePW === "") {
      confirmInfo = {
        state: true,
        text: `"새 비밀번호 확인"란을 입력해주세요.`,
      };
    } else if (newPW !== rePW) {
      confirmInfo = {
        state: true,
        text: "비밀번호를 확인해주세요.",
      };
    }

    setPWInfo((prev) => ({
      ...prev,
      confirmInfo: confirmInfo,
    }));
  }, [PWInfo]);

  return { PWInfo, setPWInfo, ChangePWInfo, ConfirmPWInfo };
};
