/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SettingModal from './SettingModal';

export default {
  title: 'Containers/CricketMarkUp/SettingModal',
  component: SettingModal,
} as ComponentMeta<typeof SettingModal>;

const Template: ComponentStory<typeof SettingModal> = (args) => <SettingModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  targetCount: 10,
};
