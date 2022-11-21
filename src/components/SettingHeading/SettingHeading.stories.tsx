/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SettingHeading from './SettingHeading';

export default {
  title: 'Components/SettingHeading',
  component: SettingHeading,
} as ComponentMeta<typeof SettingHeading>;

const Template: ComponentStory<typeof SettingHeading> = (args) => <SettingHeading {...args} />;

export const Default = Template.bind({});
Default.args = {};
