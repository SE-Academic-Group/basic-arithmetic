type CalculatorScreenProps = {
  input: string;
  result: string;
};

export function CalculatorScreen({ input, result }: CalculatorScreenProps) {
  return (
    <div className="whitespace-normal break-words bg-input p-3 text-end text-2xl text-input-foreground">
      <span>{input || 0}</span>
      <span>{result ? `=${result}` : ""}</span>
    </div>
  );
}
