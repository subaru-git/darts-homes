import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RadioButton from './RadioButton';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  values: [
    { value: 'single', label: 'Single Out' },
    { value: 'double', label: 'Double Out' },
    { value: 'master', label: 'Master Out' },
  ],
  defaultValue: 'master',
  disabled: false,
  onChange: () => {},
};
