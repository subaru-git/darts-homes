/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DoubleTroubleRoundOverDialog from './DoubleTroubleRoundOverDialog';

export default {
  title: 'Components/RoundOverDialog',
  component: DoubleTroubleRoundOverDialog,
} as ComponentMeta<typeof DoubleTroubleRoundOverDialog>;

const Template: ComponentStory<typeof DoubleTroubleRoundOverDialog> = (args) => (
  <DoubleTroubleRoundOverDialog {...args} />
);

export const Default = Template.bind({});
Default.args = {};
