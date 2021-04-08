import { act } from "react-dom/test-utils";

import { renderHook } from "@testing-library/react-hooks";

import { useInput } from "../../hooks/useInput";

describe("useInput", () => {
  context("number type", () => {
    it.each`
      targetValue                   | expected
      ${[1, 12, 123]}               | ${123}
      ${["-", "-1", "-1-", "-1-2"]} | ${-12}
      ${[".", 0.1, ".1.", ".1.0"]}  | ${0.1}
    `("test onChangeInput", ({ targetValue, expected }) => {
      const { result } = renderHook(() => useInput({ type: "number" }));

      act(() => {
        if (Array.isArray(targetValue)) {
          targetValue.forEach((value) => {
            result.current.onChangeInput({ target: { value } });
          });
        }
      });

      expect(result.current.value).toEqual(expected);
    });

    it.each`
      targetValue            | expected
      ${[1, 12, 123]}        | ${100}
      ${[9, 99]}             | ${99}
      ${[1, 10, 100, 100.0]} | ${100}
    `("with maxValue", ({ targetValue, expected }) => {
      const { result } = renderHook(() =>
        useInput({ type: "number", maxValue: 100 })
      );

      act(() => {
        if (Array.isArray(targetValue)) {
          targetValue.forEach((value) => {
            result.current.onChangeInput({ target: { value } });
          });
        }
      });

      expect(result.current.value).toEqual(expected);
    });

    it.each`
      targetValue                            | expected
      ${[1, 12, 123, 1234]}                  | ${123}
      ${[1, 10, 100, 100.0]}                 | ${100}
      ${[1, 10, 10, 10.1]}                   | ${10}
      ${["-", "-1", "-10", "-10.", "-10.2"]} | ${-10}
    `("with maxLength", ({ targetValue, expected }) => {
      const { result } = renderHook(() =>
        useInput({ type: "number", maxLength: 3 })
      );

      act(() => {
        if (Array.isArray(targetValue)) {
          targetValue.forEach((value) => {
            result.current.onChangeInput({ target: { value } });
          });
        }
      });

      expect(result.current.value).toEqual(expected);
    });

    it.each`
      targetValue            | expected
      ${[1, 12, 123]}        | ${true}
      ${[9, 99]}             | ${false}
      ${[1, 10, 100, 100.0]} | ${true}
    `("with minValue", ({ targetValue, expected }) => {
      const { result } = renderHook(() =>
        useInput({ type: "number", minValue: 100 })
      );

      act(() => {
        if (Array.isArray(targetValue)) {
          targetValue.forEach((value) => {
            result.current.onChangeInput({ target: { value } });
          });
        }
      });

      expect(result.current.isValid).toBe(expected);
    });

    it.each`
      targetValue           | expected
      ${[1, 12, 123]}       | ${true}
      ${[0, "0.", "0.0"]}   | ${false}
      ${[1, "1.", "1.1"]}   | ${true}
      ${["-", "-1", "-1."]} | ${false}
    `("with minLength", ({ targetValue, expected }) => {
      const { result } = renderHook(() =>
        useInput({ type: "number", minLength: 3 })
      );

      act(() => {
        if (Array.isArray(targetValue)) {
          targetValue.forEach((value) => {
            result.current.onChangeInput({ target: { value } });
          });
        }
      });

      expect(result.current.isValid).toBe(expected);
    });
  });

  context("string type", () => {
    it.each`
      targetValue                                                     | expected
      ${["ㄱ", "구", "귀", "귕", "귀여", "귀영", "귀여우", "귀여운"]} | ${"귀여운"}
      ${["c", "cu", "cut", "cuty"]}                                   | ${"cuty"}
    `("test onChangeInput", ({ targetValue, expected }) => {
      const { result } = renderHook(() => useInput({}));

      act(() => {
        if (Array.isArray(targetValue)) {
          targetValue.forEach((value) => {
            result.current.onChangeInput({ target: { value } });
          });
        }
      });

      expect(result.current.value).toEqual(expected);
    });

    it.each`
      targetValue                                                     | expected
      ${["ㄱ", "구", "귀", "귕", "귀여", "귀영", "귀여우", "귀여운"]} | ${"귀여"}
      ${["c", "cu", "cut", "cuty"]}                                   | ${"cu"}
    `("with maxLength", ({ targetValue, expected }) => {
      const { result } = renderHook(() => useInput({ maxLength: 2 }));

      act(() => {
        if (Array.isArray(targetValue)) {
          targetValue.forEach((value) => {
            result.current.onChangeInput({ target: { value } });
          });
        }
      });

      expect(result.current.value).toEqual(expected);
    });

    it.each`
      targetValue                         | expected
      ${["ㄱ", "구", "귀", "귕", "귀여"]} | ${true}
      ${["ㄱ", "구", "귀", "귕"]}         | ${false}
    `("with minLength", ({ targetValue, expected }) => {
      const { result } = renderHook(() => useInput({ minLength: 2 }));

      act(() => {
        if (Array.isArray(targetValue)) {
          targetValue.forEach((value) => {
            result.current.onChangeInput({ target: { value } });
          });
        }
      });

      expect(result.current.isValid).toBe(expected);
    });
  });
});
