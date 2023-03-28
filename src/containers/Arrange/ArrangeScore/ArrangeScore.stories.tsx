/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrangeScore from './ArrangeScore';

export default {
  title: 'Containers/Arrange/ArrangeScore',
  component: ArrangeScore,
} as ComponentMeta<typeof ArrangeScore>;

const Template: ComponentStory<typeof ArrangeScore> = (args) => <ArrangeScore {...args} />;

export const Default = Template.bind({});
Default.args = {
  score: '275',
  round: '351',
  pro: false,
};
