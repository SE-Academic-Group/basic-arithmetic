import { describe } from "vitest";
import { isNumber } from "./isNumber";

describe("isNumber", () => {
  it("should return true if the value is a number", () => {
    expect(isNumber("1")).toBe(true);
  });
});
