/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EaglesEyeDescription from './EaglesEyeDescription';

export default {
  title: 'Components/EaglesEyeDescription',
  component: EaglesEyeDescription,
} as ComponentMeta<typeof EaglesEyeDescription>;

const Template: ComponentStory<typeof EaglesEyeDescription> = (args) => (
  <EaglesEyeDescription {...args} />
);

export const Default = Template.bind({});
Default.args = {};
