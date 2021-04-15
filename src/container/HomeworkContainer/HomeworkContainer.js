import React from "react";
import Homework from "../../component//";

const HomeworkContainer = () => {
  const homeworkList = [
    {
      Id: 1,
      Title: "숙제 제목",
      Start: "숙제 등록한 날짜",
      End: "숙제 기한 날짜",
      Content: "숙제 내용",
      Status: "ASSIGNED", // 숙제의 상태 (ASSIGNED, SUBMITTED, UN_SUBMITTED, FINISHED)
    },
    {
      Id: 2,
      Title: "숙제 제목",
      Start: "숙제 등록한 날짜",
      End: "숙제 기한 날짜",
      Content: "숙제 내용",
      Status: "SUBMITTED", // 숙제의 상태 (ASSIGNED, SUBMITTED, UN_SUBMITTED, FINISHED)
    },
    {
      Id: 3,
      Title: "숙제 제목",
      Start: "숙제 등록한 날짜",
      End: "숙제 기한 날짜",
      Content: "숙제 내용",
      Status: "UN_SUBMITTED", // 숙제의 상태 (ASSIGNED, SUBMITTED, UN_SUBMITTED, FINISHED)
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
