import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RoundOverDialog from './RoundOverDialog';

export default {
  title: 'Components/RoundOverDialog',
  component: RoundOverDialog,
} as ComponentMeta<typeof RoundOverDialog>;

const Template: ComponentStory<typeof RoundOverDialog> = (args) => <RoundOverDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  result: 'Result',
};
