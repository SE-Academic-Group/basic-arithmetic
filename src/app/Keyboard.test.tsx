import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { COMMANDS } from "../constants/commands";
import { Keyboard } from "./Keyboard";

describe("Keyboard", () => {
  it("renders all buttons", () => {
    render(<Keyboard onButtonClick={vi.fn()} />);
    COMMANDS.forEach((command) => {
      expect(screen.getByText(command)).toBeDefined();
    });
  });

  it("calls onButtonClick with the correct value when a button is clicked", () => {
    const handleButtonClick = vi.fn();
    render(<Keyboard onButtonClick={handleButtonClick} />);

    COMMANDS.forEach((command) => {
      const button = screen.getByText(command);
      fireEvent.click(button);
      expect(handleButtonClick).toHaveBeenCalledWith(command);
    });
  });
});
