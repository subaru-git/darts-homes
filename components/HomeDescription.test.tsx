import HomeDescription from "./HomeDescription";
import { render, screen } from "@testing-library/react";

test("should rendering", () => {
  const { container } = render(<HomeDescription />);
  expect(screen.getByAltText("darts")).not.toBeNull();
  expect(container).toMatchSnapshot();
});
