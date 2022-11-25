import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RoundScoreButton from './RoundScoreButton';

export default {
  title: 'Components/RoundScoreButton',
  component: RoundScoreButton,
} as ComponentMeta<typeof RoundScoreButton>;

const Template: ComponentStory<typeof RoundScoreButton> = (args) => <RoundScoreButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  isFinished: false,
};

export const Finished = Template.bind({});
Finished.args = {
  isFinished: true,
  disabled: false,
  result: 'Result',
};
