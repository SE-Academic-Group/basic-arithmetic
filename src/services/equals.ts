export function equals(input: string) {
  try {
    const result = eval(input);

    if (typeof result === "number") {
      if (Number.isInteger(result)) {
        return result.toString();
      }

      return result.toFixed(2).toString();
    }

    return "Error";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return "Error";
  }
}
