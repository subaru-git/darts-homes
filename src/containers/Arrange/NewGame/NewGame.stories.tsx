/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NewGame from './NewGame';

export default {
  title: 'Containers/Arrange/NewGame',
  component: NewGame,
} as ComponentMeta<typeof NewGame>;

const Template: ComponentStory<typeof NewGame> = (args) => <NewGame {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentSettings: { range: 0, out: 'double', simulation: true, hard: false, separate: false },
  isFinished: false,
};
