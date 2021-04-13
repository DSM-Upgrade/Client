import React from "react";
import Homework from "../../component/Homework/Homework";

const HomeworkContainer = () => {
  const homeworkList = [
    {
      homeworkId: 1,
      homeworkTitle: "숙제 제목",
      homeworkStart: "숙제 등록한 날짜",
      homeworkEnd: "숙제 기한 날짜",
      homeworkContent: "숙제 내용",
      homeworkStatus: "ASSIGNED", // 숙제의 상태 (ASSIGNED, SUBMITTED, UN_SUBMITTED, FINISHED)
    },
    {
      homeworkId: 2,
      homeworkTitle: "숙제 제목",
      homeworkStart: "숙제 등록한 날짜",
      homeworkEnd: "숙제 기한 날짜",
      homeworkContent: "숙제 내용",
      homeworkStatus: "SUBMITTED", // 숙제의 상태 (ASSIGNED, SUBMITTED, UN_SUBMITTED, FINISHED)
    },
    {
      homeworkId: 3,
      homeworkTitle: "숙제 제목",
      homeworkStart: "숙제 등록한 날짜",
      homeworkEnd: "숙제 기한 날짜",
      homeworkContent: "숙제 내용",
      homeworkStatus: "UN_SUBMITTED", // 숙제의 상태 (ASSIGNED, SUBMITTED, UN_SUBMITTED, FINISHED)
    },
  ];

  /*   const fields = [
    {
      id: 1,
      name: "백엔드",
    },
    {
      id: 2,
      name: "디자인",
    },
    {
      id: 3,
      name: "프론트엔드",
    },
  ]; */

  return <Homework homeworkList={homeworkList} />;
};

export default HomeworkContainer;
