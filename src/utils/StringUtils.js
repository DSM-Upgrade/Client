export const limitMaxLength = (recivedStr, maxLength) => {
  return String(recivedStr).substr(0, maxLength);
};

export const limitMaxValue = (recivedNumber, maxValue) => {
  if (recivedNumber < maxValue) {
    return recivedNumber;
  } else {
    return maxValue;
  }
};

export const removeNonNumeric = (targetValue) => {
  let numericArr = [];
  String(targetValue)
    .split("")
    .forEach((value, forEachIdx) => {
      if (value === "." && !~numericArr.findIndex((num) => num === ".")) {
        numericArr.push(value);
      } else if (!isNaN(value)) {
        numericArr.push(value);
      } else if (forEachIdx === 0 && value === "-") {
        numericArr.push(value);
      }
    });

  return Number(numericArr.join(""));
};
