import CountBullButtons from "./CountBullButtons";
import { fireEvent, render } from "@testing-library/react";

test("should rendering and clickable input", () => {
  const mockOnScore = jest.fn();
  const { container } = render(<CountBullButtons onCount={mockOnScore} />);
  fireEvent.click(container.querySelector("input")!);
  expect(mockOnScore).toBeCalledTimes(1);
  expect(container).toMatchSnapshot();
});

test("should rendering and disable input", () => {
  const mockOnScore = jest.fn();
  const { container } = render(
    <CountBullButtons onCount={mockOnScore} disabled />
  );
  fireEvent.click(container.querySelector("input")!);
  expect(mockOnScore).toBeCalledTimes(0);
  expect(container).toMatchSnapshot();
});
