import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { loginPageActionsCreaters } from "../../../module/action/loginPage/index";

import RegisterPage from "../../../component/LoginPage/RegisterPage/RegisterPage";

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const signUpInfo = useSelector((state) => state.loginPage.signUpInfo);

  const [signUpData, setSignUpData] = useState({
    ...signUpInfo,
  });

  const { authSignUpSaga } = loginPageActionsCreaters;

  const setSignUpAuthInfo = (authSignUpInfo) => {
    dispatch(authSignUpSaga(authSignUpInfo));
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
