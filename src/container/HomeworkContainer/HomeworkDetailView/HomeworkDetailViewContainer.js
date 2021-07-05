import React from "react";
import HomeworkDetailView from "../../../component/Homework/HomeworkDetailView/HomeworkDetailView";

const HomeworkDetailViewContainer = (props) => {
  const { Id, Title, CreatedAt, Deadline } = props.location.state;
  const linkProps = {
    Id: Id,
    Title: Title,
    CreatedAt: CreatedAt,
    Deadline: Deadline,
  };

  console.log(linkProps);

  return <HomeworkDetailView linkProps={linkProps} />;
};

export default HomeworkDetailViewContainer;
