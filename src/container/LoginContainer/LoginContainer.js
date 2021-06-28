import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  loginPageActionsCreaters,
  loginPageActions,
} from "../../module/action/loginPage/index";

import LoginPage from "../../component/LoginPage/LoginPage";

import { setItem } from "../../utils/LocalStorageUtils";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.loginPage.loginInfo);
  const authToken = useSelector((state) => state.loginPage.authToken);
  const setNull = useSelector((state) => state.loginPage.inputStatus);

  const [loginData, setLoginData] = useState({
    ...loginInfo,
  });

  const [isNull, setIsNull] = useState({ ...setNull });

  const { access_token, refresh_token } = authToken;
  setItem("accessToken", access_token);
  setItem("refreshToken", refresh_token);

  const { authLogInSaga, setInputNull } = loginPageActionsCreaters;

  const setLoginAuthInfo = (authLoginInfo) => {
    dispatch(authLogInSaga(authLoginInfo));
  };

  const setInputInfoNull = (isInputNull) => {
    dispatch(setInputNull(isInputNull));
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
    setTimeout(test, 1233);
  };

  const test = () => {
    console.log(isNull);
    if (isNull.setNull) {
      setLoginData((prevState) => ({
        ...prevState,
        username: "",
        password: "",
      }));
      setIsNull(false);
    }
    setTimeout(setInputInfoNull(isNull), 1000);
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
