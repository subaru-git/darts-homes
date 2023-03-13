import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from './Select';

export default {
  title: 'Atoms/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Japan', 'USA', 'China'],
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  options: ['Japan', 'USA', 'China'],
  defaultValue: 'USA',
};
