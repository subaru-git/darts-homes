import React from "react";
import HomeDescription from "../components/HomeDescription";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/HomeDescription",
  component: HomeDescription,
} as ComponentMeta<typeof HomeDescription>;

const Template: ComponentStory<typeof HomeDescription> = (args) => (
  <HomeDescription {...args} />
);

export const Default = Template.bind({});
Default.args = {};
