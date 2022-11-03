/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CricketMarkUpSettingModal from './CricketMarkUpSettingModal';

export default {
  title: 'Components/CricketMarkUpSettingModal',
  component: CricketMarkUpSettingModal,
} as ComponentMeta<typeof CricketMarkUpSettingModal>;

const Template: ComponentStory<typeof CricketMarkUpSettingModal> = (args) => (
  <CricketMarkUpSettingModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  targetCount: 10,
};
