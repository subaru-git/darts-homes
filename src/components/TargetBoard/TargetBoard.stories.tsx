import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TargetBoard from './TargetBoard';

export default {
  title: 'Components/TargetBoard',
  component: TargetBoard,
} as ComponentMeta<typeof TargetBoard>;

const Template: ComponentStory<typeof TargetBoard> = (args) => <TargetBoard {...args} />;

export const Default = Template.bind({});
Default.args = {
  target: '501',
  message: 'Next Target',
};
