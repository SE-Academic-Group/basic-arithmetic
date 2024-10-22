import { TCommand } from "../constants/commands";
import { isOperator } from "../utils/isOperator";

export function appendDecimalPoint(input: string, value: TCommand) {
  const lastChar = input.slice(-1);
  const isLastCharOperator = isOperator(lastChar);

  if (isLastCharOperator) return input;

  const lastNumber = input.split(/[-+x÷]/).pop() || "0";

  return lastNumber.includes(".") ? input : input + value;
}
