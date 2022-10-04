import EaglesEyeBoard from "./EaglesEyeBoard";
import { render, screen } from "@testing-library/react";

test("should rendering", () => {
  const { container } = render(
    <EaglesEyeBoard data={[["D-BULL", "0", "S-BULL"]]} />
  );
  expect(screen.getAllByText("D-BULL")).toHaveLength(1);
  expect(screen.getAllByText("-")).toHaveLength(1);
  expect(screen.getAllByText("S-BULL")).toHaveLength(1);
  expect(container).toMatchSnapshot();
});