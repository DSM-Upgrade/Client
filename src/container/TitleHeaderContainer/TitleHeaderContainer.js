import React from "react";
import TitleHeader from "../../component/TitleHeader/TitleHeader";

const TitleHeaderContainer = (props) => {
  const { text } = props;

  const firstChar = text.slice(0, 1);
  const otherChar = text.slice(1);

  return <TitleHeader firstChar={firstChar} otherChar={otherChar} />;
};

export default TitleHeaderContainer;