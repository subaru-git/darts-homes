import React from "react";
import NavigationBar from "../components/NavigationBar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
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
          href: "#",
        },
        {
          label: "Cricket Number Count",
          subLabel: "A original dart game for practice. designed by kikuyama.",
          href: "#",
        },
      ],
    },
    {
      label: "Respects",
      href: "#",
    },
  ],
};
