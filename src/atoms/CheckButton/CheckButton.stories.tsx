import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckButton from './CheckButton';

export default {
  title: 'Atoms/CheckButton',
  component: CheckButton,
} as ComponentMeta<typeof CheckButton>;

const Template: ComponentStory<typeof CheckButton> = (args) => <CheckButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'green',
  children: 'CheckButton',
};
