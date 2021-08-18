import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import HeaderContainer from "../../../container/HeaderContainer/HeaderContainer";

const HomeworkAdmin = (props) => {
  const {
    onSubmitEvent,
    onChangeFormData,
    userList,
    changeHandler,
    assignmentObj,
  } = props;

  const { title, content, date, time } = assignmentObj;

  const UserList = userList.length ? (
    userList.map((userList, index) => {
      let field_name = "";
      const { name, username, student_num, field_id } = userList;
      if (field_id === 1) {
        field_name = "백엔드";
      } else if (field_id === 2) {
        field_name = "디자인";
      } else if (field_id === 3) {
        field_name = "프론트엔드";
      }
      return (
        <div key={index}>
          <input
            type="checkbox"
            name="usernames"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, username);
            }}
          />
          <p>{student_num}</p>
          <p>
            {name}({username})
          </p>
          <p>{field_name}</p>
        </div>
      );
    })
  ) : (
    <div style={{ paddingLeft: "40%" }}>리스트 불러오는 중...</div>
  );

  return (
    <S.Container>
      <HeaderContainer />
      <S.MainWrapper>
        <S.SectionContainer>
          <S.SectionHeaderContainer onSubmit={onSubmitEvent}>
            <header>
              <input
                type="text"
                placeholder="숙제 제목 입력"
                name="title"
                value={title || ''}
                onChange={onChangeFormData}
              ></input>
              <div className="dayWrapper">
                <p>기한 : </p>
                <input
                  type="date"
                  name="date"
                  value={date || ''}
                  onChange={onChangeFormData}
                ></input>
                <input
                  type="time"
                  name="time"
                  value={time || ''}
                  onChange={onChangeFormData}
                ></input>
              </div>
            </header>
            <section>
              <textarea
                placeholder="설명을 써 넣어주세요"
                name="content"
                value={content || ''}
                onChange={onChangeFormData}
              ></textarea>
              <div className="checkMember">
                <p className="memberTitle">할당 멤버 선택</p>
                <div className="checkWrapper">{UserList}</div>
              </div>
              <input type="submit" value="생성하기" />
            </section>
          </S.SectionHeaderContainer>
        </S.SectionContainer>
      </S.MainWrapper>
    </S.Container>
  );
};

HomeworkAdmin.defaultProps = {
  userList: [],
};

export default HomeworkAdmin;
