import React from "react";
import Players from "../components/Players";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Players",
  component: Players,
} as ComponentMeta<typeof Players>;

const Template: ComponentStory<typeof Players> = (args) => (
  <Players {...args} />
);

export const Default = Template.bind({});
Default.args = {
  players: ["Player 1", "Player 2"],
};
