import React from "react";
import * as S from "./style";

const MyPageHomework = () => {
  const homeworks = [
    {
      homework_id: 1,
      homework_title: "숙제 제목",
      homework_start: "숙제 등록한 연-월-일",
      homework_end: "숙제 기한 연-월-일",
      homework_writer: "이름",
    },
    {
      homework_id: 2,
      homework_title: "숙제 제목",
      homework_start: "숙제 등록한 연-월-일",
      homework_end: "숙제 기한 연-월-일",
      homework_writer: "이름",
    },
  ];
  const cntOfHomeworks = homeworks.length;

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
