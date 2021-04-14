import {
  limitMaxLength,
  limitMaxValue,
  removeNonNumeric,
} from "../../utils/StringUtils";

describe("StringUtils", () => {
  it.each`
    recivedNumber | maxLength | expected
    ${12345}      | ${3}      | ${"123"}
    ${12345}      | ${4}      | ${"1234"}
    ${12345}      | ${5}      | ${"12345"}
    ${12345}      | ${6}      | ${"12345"}
  `("limitMaxLength", ({ recivedNumber, maxLength, expected }) => {
    expect(limitMaxLength(recivedNumber, maxLength)).toEqual(expected);
  });

  it.each`
    recivedNumber | maxValue | expected
    ${100}        | ${100}   | ${100}
    ${100}        | ${99}    | ${99}
    ${99}         | ${100}   | ${99}
    ${101}        | ${100.0} | ${100.0}
  `("limitMaxValue", ({ recivedNumber, maxValue, expected }) => {
    expect(limitMaxValue(recivedNumber, maxValue)).toEqual(expected);
  });

  it.each`
    targetValue                                                    | expected
    ${12345}                                                       | ${12345}
    ${"123a5"}                                                     | ${1235}
    ${"123-5"}                                                     | ${1235}
    ${"123'5"}                                                     | ${1235}
    ${"0.0"}                                                       | ${0.0}
    ${"0..0"}                                                      | ${0.0}
    ${"0.."}                                                       | ${0.0}
    ${"-20"}                                                       | ${-20}
    ${"100000000000000000000000000000000000000000000000000000000"} | ${100000000000000000000000000000000000000000000000000000000}
  `("removeNonNumeric", ({ targetValue, expected }) => {
    expect(removeNonNumeric(targetValue)).toEqual(expected);
  });

  it("test numeric -", () => {
    expect(removeNonNumeric("-")).toEqual(0);
  });
});
