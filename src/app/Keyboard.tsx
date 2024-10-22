import { COMMANDS, TCommand } from "../constants/commands";
import { cn } from "../utils/cn";
import { isOperator } from "../utils/isOperator";

type KeyboardProps = {
  onButtonClick: (value: TCommand) => void;
};

export function Keyboard({ onButtonClick: handleButtonClick }: KeyboardProps) {
  return (
    <div className="grid grid-cols-4 gap-0.5">
      {COMMANDS.map((button) => (
        <button
          className={cn(
            "bg-number p-2 text-xl font-medium hover:bg-number/40",
            button === "0" && "col-span-2",
            isOperator(button) && "bg-operator hover:bg-operator/40",
          )}
          key={button}
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
