import CricketNumberCountDescription from "./CricketNumberCountDescription";
import { render, screen } from "@testing-library/react";

test("should rendering", () => {
  const { container } = render(<CricketNumberCountDescription />);
  expect(screen.getByText("What is this game?")).not.toBeNull();
  expect(container).toMatchSnapshot();
});
