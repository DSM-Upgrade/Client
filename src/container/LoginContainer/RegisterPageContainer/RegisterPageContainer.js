import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { loginPageActionsCreaters } from "../../../module/action/loginPage/index";
import { fieldActionCreaters } from "../../../module/action/field/index";

import RegisterPage from "../../../component/LoginPage/RegisterPage/RegisterPage";

const RegisterContainer = () => {
  const dispatch = useDispatch();
  /* const { fields } = useSelector((state) => state.field); */
  const signUpInfo = useSelector((state) => state.loginPage.signUpInfo);

  const [signUpData, setSignUpData] = useState({
    ...signUpInfo,
  });

  /* const [fieldId, setFieldId] = useState({
    ...fieldId,
    name: fieldId,
  }); */

  const { authSignUp } = loginPageActionsCreaters;
  const { setFields } = fieldActionCreaters;

  const setSignUpAuthInfo = (authSignUpInfo) => {
    dispatch(authSignUp(authSignUpInfo));
  };

  /*  const setFieldData = (fields) => {
    dispatch(setFields(fields));
  }; */

  const onChangeSignUpData = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    /* const { field_id } = signUpData;
    setFieldId(field_id); */
  };

  const onSubmitSignUpFormData = (e) => {
    e.preventDefault();
    setSignUpAuthInfo(signUpData);
    /* setFieldData(fieldId); */
    console.log(signUpData);
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
