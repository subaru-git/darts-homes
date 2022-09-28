import React, { FC } from "react";
import Link from "next/link";
import NavigationBar, { NavItem } from "./NavigationBar";

const HomeMain: FC = () => {
  return (
    <div>
      <NavigationBar items={items} />
      <h1>Home</h1>
      <Link href="/n01">501</Link>
      <br />
      <Link href="/eagleseye">Eagle&apos;s Eye</Link>
      <br />
      <Link href="/cricketnumbercount">Cricket Number Count</Link>
    </div>
  );
};

const items: Array<NavItem> = [
  {
    label: "Games",
    children: [
      {
        label: "501",
        subLabel: "The popular dart game",
        href: "/n01",
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

export default HomeMain;
