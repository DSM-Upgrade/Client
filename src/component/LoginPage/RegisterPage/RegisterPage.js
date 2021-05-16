import React, { useState } from "react";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";
import { Link } from "react-router-dom";
import * as S from "./style";

const RegisterPage = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    name: "",
    field_id: "",
    student_num: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(signUpData);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  return (
    <S.MainWrapper>
      <HeaderContainer />
      <S.MainBox>
        <S.RegisterBox onSubmit={onSubmitHandler}>
          <h1>Register</h1>
          <div className="firstLine">
            <input
              name="student_num"
              value={signUpData.student_num}
              onChange={onChangeHandler}
              placeholder="학번"
              maxLength="4"
            ></input>
            <input
              name="name"
              value={signUpData.name}
              onChange={onChangeHandler}
              placeholder="이름"
            ></input>
          </div>
          <div className="anotherLine">
            <input
              name="username"
              value={signUpData.username}
              onChange={onChangeHandler}
              placeholder="아이디 (6 ~ 16자리, 영어, 숫자)"
            ></input>
            <input
              name="password"
              value={signUpData.password}
              onChange={onChangeHandler}
              placeholder="비밀번호 (8 ~ 20자리, 영어, 숫자, 특수문자)"
            ></input>
            <select
              name="field_id"
              value={signUpData.field_id}
              onChange={onChangeHandler}
            >
              <option>분야</option>
              <option value="frontEnd">웹 프론트엔드</option>
              <option value="backEnd">웹 백엔드</option>
              <option value="android">안드로이드</option>
              <option value="IOS">IOS</option>
              <option value="design">디자인</option>
            </select>
          </div>
          <input type="submit" className="submitButton" value="회원가입" />
          <Link to="/login">로그인</Link>
        </S.RegisterBox>
        <div className="backgroundTriangle">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </S.MainBox>
    </S.MainWrapper>
  );
};

export default RegisterPage;
