import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PasswordModal from "../../../component/Modal/PasswordModal/PasswordModal";
import { MODAL_ACTION_CREATERS } from "../../../module/action/modal";

const PasswordModalContainer = () => {
  const errorData = useSelector((state) => state.modal.error);

  const [PWInfo, setPWInfo] = useState({
    curPW: "",
    newPW: "",
    rePW: "",
    confirmInfo: { state: false, text: "" },
  });
  const ChangePWInfo = useCallback(
    (e) => {
      const { name, value } = e.target;

      console.log(PWInfo);

      setPWInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [PWInfo]
  );

  const ConfirmPWInfo = useCallback(() => {
    const { newPW, rePW } = PWInfo;
    let confirmInfo = {
      state: false,
      text: "",
    };

    if (newPW === "") {
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

  const { dropModal } = MODAL_ACTION_CREATERS;
  const dispatch = useDispatch();
  const ModalOff = useCallback(() => {
    dispatch(dropModal());
  }, [dispatch]);

  const PreventModalOff = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <PasswordModal
      errorData={errorData}
      PWInfo={PWInfo}
      ChangePWInfo={ChangePWInfo}
      ConfirmPWInfo={ConfirmPWInfo}
      ModalOff={ModalOff}
      PreventModalOff={PreventModalOff}
    ></PasswordModal>
  );
};

export default PasswordModalContainer;
