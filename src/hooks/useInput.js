import { useState, useCallback, useRef } from "react";

import {
  limitMaxLength,
  limitMaxValue,
  removeNonNumeric,
} from "../utils/StringUtils";

export const useInput = (options) => {
  const {
    maxValue,
    minValue,
    initialValue,
    maxLength,
    minLength = 0,
    autoFix = true,
    type = "string",
  } = options || {};

  const [value, setValue] = useState(initialValue || "");
  const isValid = useRef(true);

  const handleNumber = useCallback(
    (recivedNumber) => {
      let result = recivedNumber;

      if (maxLength) {
        result = Number(limitMaxLength(result, maxLength));
      }

      if (maxValue) {
        result = limitMaxValue(result, maxValue);
      }

      const returnValue = autoFix ? result : recivedNumber;
      isValid.current =
        result === recivedNumber &&
        (minLength ? minLength <= String(returnValue).length : true) &&
        (minValue ? minValue <= parseInt(returnValue, 10) : true);
      setValue(returnValue);
    },
    [maxLength, minLength, maxValue, minValue, autoFix]
  );

  const handleString = useCallback(
    (receivedValue) => {
      let result = receivedValue;

      if (maxLength) {
        result = result.substr(0, maxLength);
      }

      const returnValue = autoFix ? result : receivedValue;
      isValid.current =
        result === receivedValue &&
        (minLength ? minLength <= returnValue.length : true);
      setValue(returnValue);
    },
    [maxLength, minLength, autoFix]
  );

  const onChangeInput = useCallback(
    (e) => {
      const targetValue = e.target.value || "";
      if (type === "number") {
        handleNumber(removeNonNumeric(targetValue));
      } else {
        handleString(targetValue);
      }
    },
    [type, handleNumber, handleString]
  );

  return { value, onChangeInput, isValid: isValid.current };
};
