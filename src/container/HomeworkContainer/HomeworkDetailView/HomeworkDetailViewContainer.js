import React from "react";
import HomeworkDetailView from "../../../component/Homework/HomeworkDetailView/HomeworkDetailView";

const HomeworkDetailViewContainer = () => {
  const HomeworkDetailViewJson = {
    homeworkTitle: "숙제 제목",
    homeworkStart: "숙제 등록한 날짜",
    homeworkEnd: "숙제 기한 날짜",
    homeworkSubmittedDate: "숙제 반환한 날짜", // 반환 안 했으면 null
    homeworkContent: "숙제 등록한 내용",
    homeworkReturn: "숙제 반환한 내용", // 반환 안 했으면 null
    fileName: "파일이름",
  };
  return <HomeworkDetailView HomeworkDetailViewJson={HomeworkDetailViewJson} />;
};

export default HomeworkDetailViewContainer;
