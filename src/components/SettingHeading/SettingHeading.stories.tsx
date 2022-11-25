import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SettingHeading from './SettingHeading';

export default {
  title: 'Components/SettingHeading',
  component: SettingHeading,
} as ComponentMeta<typeof SettingHeading>;

const Template: ComponentStory<typeof SettingHeading> = (args) => <SettingHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Setting',
  hintHeader: 'Hint',
  hintBody: 'This is a hint',
};
