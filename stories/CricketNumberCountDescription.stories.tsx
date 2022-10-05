import React from "react";
import CricketNumberCountDescription from "../components/CricketNumberCountDescription";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/CricketNumberCountDescription",
  component: CricketNumberCountDescription,
} as ComponentMeta<typeof CricketNumberCountDescription>;

const Template: ComponentStory<typeof CricketNumberCountDescription> = (
  args
) => <CricketNumberCountDescription {...args} />;

export const Default = Template.bind({});
Default.args = {};
