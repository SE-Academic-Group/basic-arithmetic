import { TCommand } from "../constants/commands";
import { isOperator } from "../utils/isOperator";

export function appendOperator(input: string, operator: TCommand) {
  if (!input && operator !== "-") return input;

  const lastChar = input.slice(-1);
  const isLastCharOperator = isOperator(lastChar);

  if (operator == "-" && isLastCharOperator && lastChar != "-") {
    return input + operator;
  }

  return isLastCharOperator ? input : input + operator;
}
