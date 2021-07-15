import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";
import TitleHeaderContainer from "../../../container/TitleHeaderContainer/TitleHeaderContainer";
import HomeworkAdminDetailView from "../HomeworkAdminDetailView/HomeworkAdminDetailView";

const HomeworkAdmin = (props) => {
  const { adminList } = props;

  const adminHomeList = adminList.length ? (
    adminList.map((adminList, index) => {
      console.log(adminList);
      const {
        id,
        status,
        title,
        created_at,
        username,
        name,
        files,
      } = adminList;
      if (status === "ASSIGNED") {
        return (
          <Link
            key={index}
            to={{
              pathname: `/HomeworkAdminDetailView/${id}`,
              state: {
                Id: id,
                Username: username,
                Files: files,
                Status: status,
                Title: title,
                Name: name,
              },
            }}
          >
            <S.AllocationBox>
              <div>
                <div>할당</div>
              </div>
              <div>
                <p>{title}</p>
              </div>
              <div>
                <p>{name}</p>
              </div>
              <div className="trashImage"></div>
              {files ? <span id="clipImage"></span> : ""}
              <div>
                <p>{created_at.substring(0, 10)}</p>
              </div>
            </S.AllocationBox>
          </Link>
        );
      } else if (status === "SUBMITTED") {
        return (
          <Link
            key={index}
            to={{
              pathname: `/HomeworkAdminDetailView/${id}`,
              state: {
                Id: id,
                Username: username,
                Files: files,
                Status: status,
                Title: title,
                Name: name,
              },
            }}
          >
            <S.SubmissionBox>
              <div>
                <div>제출</div>
              </div>
              <div>
                <p>{title}</p>
              </div>
              <div>
                <p>{name}</p>
              </div>
              <div className="trashImage"></div>
              {files ? <span id="clipImage"></span> : ""}
              <div>
                <p>{created_at.substring(0, 10)}</p>
              </div>
            </S.SubmissionBox>
          </Link>
        );
      } else if (status === "UNSUBMITTED") {
        return (
          <Link
            key={index}
            to={{
              pathname: `/HomeworkAdminDetailView/${id}`,
              state: {
                Id: id,
                Username: username,
                Files: files,
                Status: status,
                Title: title,
                Name: name,
              },
            }}
          >
            <S.UnsubmittedBox>
              <div>
                <div>누락</div>
              </div>
              <div>
                <p>{title}</p>
              </div>
              <div>
                <p>{name}</p>
              </div>
              <div className="trashImage"></div>
              {files ? <span id="clipImage"></span> : ""}
              <div>
                <p>{created_at.substring(0, 10)}</p>
              </div>
            </S.UnsubmittedBox>
          </Link>
        );
      }
    })
  ) : (
    <div style={{ marginLeft: "50%", fontSize: "1.5rem" }}>로딩중..</div>
  );

  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <div className="Title">
          <TitleHeaderContainer text="Homework" />
        </div>
        <S.SettingBox>
          <Link to="/homeworkCreate">
            <p>숙제생성</p>
          </Link>
        </S.SettingBox>
        <S.Wrapper>
          <div className="adminListWrapper">{adminHomeList}</div>
        </S.Wrapper>
      </S.MainWrapper>
    </S.Container>
  );
};

HomeworkAdmin.defaultProps = {
  adminList: [],
};

export default HomeworkAdmin;
