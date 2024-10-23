import { isNumber } from "./isNumber";

describe("isNumber", () => {
  it("should return true if the value is a integer number", () => {
    const numbers = Array.from({ length: 10 }, (_, i) => i);

    numbers.forEach((number) => {
      expect(isNumber(number.toString())).toBe(true);
    });
  });

  it("should return true if the value is a float number", () => {
    const numbers = Array.from({ length: 10 }, (_, i) => i);

    numbers.forEach((number) => {
      expect(isNumber(`${number}.5`)).toBe(true);
    });
  });

  it("should return false if the value is an operator", () => {
    const operators = ["+", "-", "*", "/"];

    operators.forEach((operator) => {
      expect(isNumber(operator)).toBe(false);
    });
  });

  it("should return false if the value is a calculation function", () => {
    const fns = ["AC", "DEL", "=", "Ans"];

    fns.forEach((fn) => {
      expect(isNumber(fn)).toBe(false);
    });
  });
});
