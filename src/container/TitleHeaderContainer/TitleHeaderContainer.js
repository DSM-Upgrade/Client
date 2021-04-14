import React, { useRef } from "react";

import TitleHeader from "../../component/TitleHeader/TitleHeader";

const TitleHeaderContainer = (props) => {
  const { text } = props;
  const firstChar = useRef("");
  const otherChar = useRef("");

  if (!text?.length) {
    firstChar.current = "U";
    otherChar.current = "ntitled";
  } else if (text.length === 1) {
    firstChar.current = text.slice(0, 1);
  } else {
    firstChar.current = text.slice(0, 1);
    otherChar.current = text.slice(1);
  }

  return <TitleHeader firstChar={firstChar} otherChar={otherChar} />;
};

export default TitleHeaderContainer;
