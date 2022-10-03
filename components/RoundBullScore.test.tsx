import RoundBullScore from "./RoundBullScore";
import { fireEvent, render, screen } from "@testing-library/react";

test("should rendering", () => {
  const clear = jest.fn();
  const roundChange = jest.fn();
  const { container } = render(
    <RoundBullScore
      scores={["0", "S-BULL", "D-BULL"]}
      onClear={clear}
      onRoundChange={roundChange}
    />
  );
  expect(screen.getAllByText("-")).toHaveLength(1);
  expect(screen.getAllByText("S-BULL")).toHaveLength(1);
  expect(screen.getAllByText("D-BULL")).toHaveLength(1);
  fireEvent.click(screen.getByLabelText("clear scores"));
  expect(clear).toBeCalledTimes(1);
  fireEvent.click(screen.getByText("Round Change"));
  expect(roundChange).toBeCalledTimes(1);
  expect(container).toMatchSnapshot();
});
