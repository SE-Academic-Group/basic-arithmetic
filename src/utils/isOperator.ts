export function isOperator(value: string) {
  return /^[+\-*/]$/.test(value);
}
