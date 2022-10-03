import NavigationBar, { NavItem } from "./NavigationBar";
import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import MatchMediaMock from "jest-matchmedia-mock";
let matchMediaMock: MatchMediaMock;
beforeEach(() => (matchMediaMock = new MatchMediaMock()));
afterEach(() => matchMediaMock.clear());

test("should rendering", () => {
  const { container } = render(
    <ChakraProvider>
      <NavigationBar items={items} />
    </ChakraProvider>
  );
  expect(screen.getAllByText("Darts-Games")).toHaveLength(1);
  expect(container).toMatchSnapshot();
});

const items: Array<NavItem> = [
  {
    label: "Games",
    children: [
      {
        label: "501",
        subLabel: "The popular dart game",
        href: "#",
      },
      {
        label: "Eagle's Eye",
        subLabel: "A dart game for BULL practice",
        href: "/eagleseye",
      },
      {
        label: "Cricket Number Count",
        subLabel: "A original dart game for practice. designed by kikuyama.",
        href: "/cricketnumbercount",
      },
    ],
  },
  {
    label: "Respects",
    href: "#",
  },
];
