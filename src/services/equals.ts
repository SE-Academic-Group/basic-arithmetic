export function equals(input: string) {
  const result = eval(input);

  if (typeof result === "number") {
    if (Number.isInteger(result)) {
      return result.toString();
    }

    return result.toFixed(2).toString();
  }

  return "Error";
}
