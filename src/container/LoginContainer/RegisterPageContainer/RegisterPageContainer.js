import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { loginPageActionsCreaters } from "../../../module/action/loginPage/index";

import RegisterPage from "../../../component/LoginPage/RegisterPage/RegisterPage";

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const signUpInfo = useSelector((state) => state.loginPage.signUpInfo);
  const inputStatus = useSelector((state) => state.loginPage.inputStatus);

  const [signUpData, setSignUpData] = useState({
    ...signUpInfo,
  });

  const { authSignUpSaga, setRegisterInputNull } = loginPageActionsCreaters;

  const setSignUpAuthInfo = (authSignUpInfo) => {
    dispatch(authSignUpSaga(authSignUpInfo));
  };

  const setRegisterInputStatusNull = (isInputNull) => {
    dispatch(setRegisterInputNull(isInputNull));
  };

  const onChangeSignUpData = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitSignUpFormData = (e) => {
    e.preventDefault();
    setSignUpAuthInfo(signUpData);
    setTimeout(setInputNullfunc, 1100);
  };

  const setInputNullfunc = () => {
    console.log(inputStatus);
    if (!inputStatus.registerSetNull) {
      setSignUpData((prevState) => ({
        ...prevState,
        username: "",
        password: "",
        name: "",
        fieldId: 0,
        student_num: "",
      }));
      setRegisterInputStatusNull(false);
    }
  };

  useEffect(() => {
    setSignUpData(signUpInfo);
  }, [signUpInfo]);

  return (
    <RegisterPage
      signUpData={signUpData}
      onSubmitSignUpFormData={onSubmitSignUpFormData}
      onChangeSignUpData={onChangeSignUpData}
    />
  );
};

export default RegisterContainer;
