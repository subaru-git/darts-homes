import CountButtons from "./CountButtons";
import { fireEvent, render, screen } from "@testing-library/react";

test("should rendering and clickable input", () => {
  const mockOnCount = jest.fn();
  const { container } = render(
    <CountButtons onCount={mockOnCount} begin={1} end={20} />
  );
  fireEvent.click(screen.getByText("outer Bull"));
  expect(mockOnCount).toBeCalledTimes(1);
  expect(container).toMatchSnapshot();
});

test("should rendering and disable input", () => {
  const mockOnCount = jest.fn();
  const { container } = render(
    <CountButtons onCount={mockOnCount} begin={1} end={20} disabled />
  );
  fireEvent.click(screen.getByText("outer Bull"));
  expect(mockOnCount).toBeCalledTimes(0);
  expect(container).toMatchSnapshot();
});

test("should rendering only cricket numbers", () => {
  const mockOnCount = jest.fn();
  const { container } = render(
    <CountButtons onCount={mockOnCount} begin={15} end={20} disabled />
  );
  expect(screen.queryAllByText("outer Bull")).toHaveLength(1);
  expect(screen.queryAllByText("15")).toHaveLength(3);
  expect(screen.queryAllByText("14")).toHaveLength(0);
  expect(container).toMatchSnapshot();
});
