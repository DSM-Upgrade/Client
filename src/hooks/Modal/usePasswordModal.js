import { useState, useCallback } from "react";

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
  const confirmPwInfo = useCallback(() => {
    const { curPW, newPW, rePW } = pwInfo;
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

    setPwInfo((prev) => ({
      ...prev,
      confirmInfo: confirmInfo,
    }));
  }, [pwInfo]);

  return {
    pwInfo,
    setPwInfo,
    changePwInfo,
    confirmPwInfo,
  };
};
