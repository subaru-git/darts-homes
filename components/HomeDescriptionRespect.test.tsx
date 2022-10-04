import HomeDescriptionRespect from "./HomeDescriptionRespect";
import { render } from "@testing-library/react";

test("should rendering", () => {
  const { container } = render(<HomeDescriptionRespect />);
  expect(container.getElementsByClassName("YouTube")).not.toBeNull();
  expect(container).toMatchSnapshot();
});
