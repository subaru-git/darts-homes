import CricketMark from "./CricketMark";
import { render } from "@testing-library/react";

test("should rendering", () => {
  const { container } = render(<CricketMark count={3} />);
  expect(container.querySelectorAll("div")).toHaveLength(1);
  expect(container).toMatchSnapshot();
});
