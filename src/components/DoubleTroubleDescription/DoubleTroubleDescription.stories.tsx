/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DoubleTroubleDescription from './DoubleTroubleDescription';

export default {
  title: 'Components/EaglesEyeDescription',
  component: DoubleTroubleDescription,
} as ComponentMeta<typeof DoubleTroubleDescription>;

const Template: ComponentStory<typeof DoubleTroubleDescription> = (args) => (
  <DoubleTroubleDescription {...args} />
);

export const Default = Template.bind({});
Default.args = {};
