/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NewGameModal from './NewGameModal';

export default {
  title: 'Components/NewGameModal',
  component: NewGameModal,
} as ComponentMeta<typeof NewGameModal>;

const Template: ComponentStory<typeof NewGameModal> = (args) => <NewGameModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isFinished: false,
  settings: <div>Settings</div>,
};
