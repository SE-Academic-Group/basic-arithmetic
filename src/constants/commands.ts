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
