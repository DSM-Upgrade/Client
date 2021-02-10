import React from "react";
import * as S from "./style";

const MyPageHomework = (props) => {
  const { homeworks, cntOfHomeworks } = props;

  return (
    <S.Container>
      <S.Title>현재 숙제</S.Title>
      <S.SubTitle>
        {cntOfHomeworks
          ? `남은 숙제 수 : ${cntOfHomeworks}개`
          : "숙제가 없네요"}
      </S.SubTitle>
      <S.HomeworkBox>
        {homeworks.length
          ? homeworks.map(({ homework_id: id, homework_title: title }) => (
              <S.HomeworkItem key={id}>{title}</S.HomeworkItem>
            ))
          : ""}
      </S.HomeworkBox>
    </S.Container>
  );
};

export default MyPageHomework;
