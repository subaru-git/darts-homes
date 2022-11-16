/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NewGameModal from './NewGameModal';

export default {
  title: 'Component/NewGameModal',
  component: NewGameModal,
} as ComponentMeta<typeof NewGameModal>;

const Template: ComponentStory<typeof NewGameModal> = (args) => <NewGameModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isFinished: false,
};
