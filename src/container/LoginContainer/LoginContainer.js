import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { loginPageActionsCreaters } from "../../module/action/loginPage/index";

import LoginPage from "../../component/LoginPage/LoginPage";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.loginPage.loginInfo);

  const [loginData, setLoginData] = useState({
    ...loginInfo,
  });

  const { authLogIn } = loginPageActionsCreaters;

  const setLoginAuthInfo = (authLoginInfo) => {
    dispatch(authLogIn(authLoginInfo));
  };

  const onChangeLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitLoginFormData = (e) => {
    e.preventDefault();
    /* const { username, password } = loginData;*/
    setLoginAuthInfo(loginData);
    console.log(loginInfo);
  };

  useEffect(() => {
    setLoginData(loginInfo);
  }, [loginInfo]);

  return (
    <LoginPage
      loginData={loginData}
      onSubmitLoginFormData={onSubmitLoginFormData}
      onChangeLoginData={onChangeLoginData}
    />
  );
};
export default LoginContainer;
