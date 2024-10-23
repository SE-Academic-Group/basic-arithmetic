export const COMMANDS = [
  "AC",
  "DEL",
  "Ans",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
] as const;

export type TCommand = (typeof COMMANDS)[number];

export const OPERATORS = ["+", "-", "*", "/"] as const;
export const NUMBERS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
] as const;
export const CALCULATION_FUNCTIONS = ["AC", "DEL", "=", "Ans"] as const;
