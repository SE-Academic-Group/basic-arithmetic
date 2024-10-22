export function appendNumber(input: string, value: string) {
  const lastNumber = input.split(/[-+x÷]/).pop();

  if (lastNumber && lastNumber.startsWith("0") && !lastNumber.includes(".")) {
    return input.slice(0, -1) + value;
  }

  return input ? input + value : value;
}
