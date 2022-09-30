import React from "react";
import EaglesEyeBoard from "../components/EaglesEyeBoard";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/EaglesEyeBoard",
  component: EaglesEyeBoard,
} as ComponentMeta<typeof EaglesEyeBoard>;

const Template: ComponentStory<typeof EaglesEyeBoard> = (args) => (
  <EaglesEyeBoard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    ["20T", "D-BULL", "S-BULL"],
    ["D-BULL", "19D", "1T"],
  ],
};
