import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { loginPageActionsCreaters } from "../../module/action/loginPage/index";

import LoginPage from "../../component/LoginPage/LoginPage";

import { setItem } from "../../utils/LocalStorageUtils";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.loginPage.loginInfo);
  const authToken = useSelector((state) => state.loginPage.authToken);
  const inputStatus = useSelector((state) => state.loginPage.inputStatus);

  const [loginData, setLoginData] = useState({
    ...loginInfo,
  });

  const { access_token, refresh_token } = authToken;
  setItem("accessToken", access_token);
  setItem("refreshToken", refresh_token);

  const { authLogInSaga, setLoginInputNull } = loginPageActionsCreaters;

  const setLoginAuthInfo = (authLoginInfo) => {
    dispatch(authLogInSaga(authLoginInfo));
  };

  const setLoginInputStatusNull = (isInputNull) => {
    dispatch(setLoginInputNull(isInputNull));
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
    setLoginAuthInfo(loginData);
    setTimeout(setInputNullfunc, 1100);
  };

  const setInputNullfunc = () => {
    console.log(inputStatus);
    if (!inputStatus.loginSetNull) {
      setLoginData((prevState) => ({
        ...prevState,
        username: "",
        password: "",
      }));
      setLoginInputStatusNull(false);
    }
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
