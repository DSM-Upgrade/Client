import React from "react";

import FineModal from "./FineModal";

export default {
  component: FineModal,
  title: "FineModal",
};

const Template = (args) => <FineModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  fineData: [{ date: "2021-04-14", reason: "그냥", price: "500" }],
};
