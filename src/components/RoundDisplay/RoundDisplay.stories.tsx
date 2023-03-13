import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RoundDisplay from './RoundDisplay';

export default {
  title: 'Components/RoundDisplay',
  component: RoundDisplay,
} as ComponentMeta<typeof RoundDisplay>;

const Template: ComponentStory<typeof RoundDisplay> = (args) => <RoundDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 4,
  round: true,
};

export const Dart = Template.bind({});
Dart.args = {
  count: 1,
  round: false,
};

export const Darts = Template.bind({});
Darts.args = {
  count: 4,
  round: false,
};
