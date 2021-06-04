import React from "react";
import HomeworkDetailView from "../../../component/Homework/HomeworkDetailView/HomeworkDetailView";

const HomeworkDetailViewContainer = (props) => {
  const { Title, Start, End, Id } = props.location.state;
  const linkProps = {
    Title,
    Start,
    End,
    Id,
  };

  return <HomeworkDetailView linkProps={linkProps} />;
};

export default HomeworkDetailViewContainer;
