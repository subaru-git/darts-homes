/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RoundScore from './RoundScore';

export default {
  title: 'Components/RoundScore',
  component: RoundScore,
} as ComponentMeta<typeof RoundScore>;

const Template: ComponentStory<typeof RoundScore> = (args) => <RoundScore {...args} />;

export const Default = Template.bind({});
Default.args = {
  scores: ['19T', '0', 'D-BULL'],
  isFinished: false,
};

export const Finished = Template.bind({});
Finished.args = {
  scores: [],
  isFinished: true,
};
