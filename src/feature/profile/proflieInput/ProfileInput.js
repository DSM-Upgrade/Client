import React from "react";

import * as S from "./style";

const ProfileInput = ({
  title,
  id,
  name,
  type = "text",
  isFreeze = false,
  defaultValue = "",
  onChange = () => {},
}) => {
  return (
    <S.InputWrap>
      <S.Label htmlFor={id}>{title}</S.Label>
      {type === "checkbox" ? (
        <S.Input
          id={id}
          name={name}
          type={type}
          defaultChecked={defaultValue}
          onChange={onChange}
        />
      ) : (
        <S.Input
          id={id}
          name={name}
          type={type}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      )}
      {isFreeze || <S.ModifySpan>수정</S.ModifySpan>}
    </S.InputWrap>
  );
};

export default React.memo(ProfileInput);
