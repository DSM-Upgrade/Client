import React from "react";
import MyPageHomework from "../../../../component/MyPage/MyPageInfo/MyPageHomework/MyPageHomework";

const MyPageHomeworkContainer = () => {
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
    <MyPageHomework homeworks={homeworks} cntOfHomeworks={cntOfHomeworks} />
  );
};

export default MyPageHomeworkContainer;
