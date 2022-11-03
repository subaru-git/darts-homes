/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DoubleTroubleNewGame from './DoubleTroubleNewGame';

export default {
  title: 'Components/DoubleTroubleNewGame',
  component: DoubleTroubleNewGame,
} as ComponentMeta<typeof DoubleTroubleNewGame>;

const Template: ComponentStory<typeof DoubleTroubleNewGame> = (args) => (
  <DoubleTroubleNewGame {...args} />
);

export const Default = Template.bind({});
Default.args = {};
