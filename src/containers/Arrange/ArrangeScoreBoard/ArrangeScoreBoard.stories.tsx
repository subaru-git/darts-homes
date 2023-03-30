import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrangeScoreBoard from './ArrangeScoreBoard';

export default {
  title: 'Components/ArrangeScoreBoard',
  component: ArrangeScoreBoard,
} as ComponentMeta<typeof ArrangeScoreBoard>;

const Template: ComponentStory<typeof ArrangeScoreBoard> = (args) => <ArrangeScoreBoard {...args} />;

export const Default = Template.bind({});
Default.args = {};
