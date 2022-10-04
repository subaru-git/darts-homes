import React from "react";
import HomeDescriptionRespect from "../components/HomeDescriptionRespect";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/HomeDescriptionRespect",
  component: HomeDescriptionRespect,
} as ComponentMeta<typeof HomeDescriptionRespect>;

const Template: ComponentStory<typeof HomeDescriptionRespect> = (args) => (
  <HomeDescriptionRespect {...args} />
);

export const Default = Template.bind({});
Default.args = {};
