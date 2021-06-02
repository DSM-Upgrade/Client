import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { dropDownActionCreaters } from "../../module/action/dropDown";

import DropDown from "./DropDown";

const DropDownContainer = ({ dropDownKind }) => {
  const dispatch = useDispatch();
  const { selectDropDownItem, unSelectDropDownItems } = useSelector(
    (state) => state.dropDown[dropDownKind]
  );

  const { clickDropDownItem } = dropDownActionCreaters;

  const [active, setActive] = useState(false);

  const dispatchClickDropDownItem = (dropDownItem) => {
    dispatch(clickDropDownItem({ dropDownKind, dropDownItem }));
  };

  const onDropDownItemClick = (selectDropDownItem) => {
    dispatchClickDropDownItem(selectDropDownItem);
  };
  const onDropDownSectionClick = () => {
    setActive((prevState) => !prevState);
  };

  const handleWindowClick = (e) => {
    if (!e.target.closest(`.drop-down-section`)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleWindowClick);

    return () => {
      document.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <DropDown
      active={active}
      selectDropDownItem={selectDropDownItem}
      unSelectDropDownItems={unSelectDropDownItems}
      onDropDownItemClick={onDropDownItemClick}
      onDropDownSectionClick={onDropDownSectionClick}
    />
  );
};

export default React.memo(DropDownContainer);
