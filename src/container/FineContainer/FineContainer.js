import React from "react";
import { fineBackground } from "../../assets/fine";
import Fine from "../../component/Fine/Fine";

const FineContainer = () => {
  const img = fineBackground;
  const isAdmin = true;

  return <Fine img={img} isAdmin={isAdmin} />;
};

export default FineContainer;
