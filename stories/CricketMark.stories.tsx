import React from "react";
import CricketMark from "../components/CricketMark";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/CricketMark",
  component: CricketMark,
} as ComponentMeta<typeof CricketMark>;

const Template: ComponentStory<typeof CricketMark> = (args) => (
  <CricketMark {...args} />
);

export const Default = Template.bind({});
Default.args = {
  count: 3,
};
