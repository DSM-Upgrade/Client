import React, { useState } from "react";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";
import { Link } from "react-router-dom";
import * as S from "./style";

const RegisterPage = (props) => {
  const { signUpData, onSubmitSignUpFormData, onChangeSignUpData } = props;
  const { username, password, name, field_id, student_num } = signUpData;

  return (
    <S.MainWrapper>
      <HeaderContainer />
      <S.MainBox>
        <S.RegisterBox onSubmit={onSubmitSignUpFormData}>
          <h1>Register</h1>
          <div className="firstLine">
            <input
              name="student_num"
              value={student_num}
              onChange={onChangeSignUpData}
              placeholder="학번"
              maxLength="4"
            ></input>
            <input
              name="name"
              value={name}
              onChange={onChangeSignUpData}
              placeholder="이름"
            ></input>
          </div>
          <div className="anotherLine">
            <input
              name="username"
              value={username}
              onChange={onChangeSignUpData}
              placeholder="아이디 (6 ~ 16자리, 영어, 숫자)"
            ></input>
            <input
              name="password"
              value={password}
              onChange={onChangeSignUpData}
              type="password"
              placeholder="비밀번호 (8 ~ 20자리, 영어, 숫자, 특수문자)"
            ></input>
            <select
              name="fieldId"
              value={field_id}
              onChange={onChangeSignUpData}
            >
              <option>분야</option>
              <option value={1}>웹 백엔드</option>
              <option value={2}>디자인</option>
              <option value={3}>웹 프론트엔드</option>
              <option value={4}>안드로이드</option>
              <option value={5}>IOS</option>
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
