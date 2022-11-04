/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NewGameAlert from './NewGameAlert';

export default {
  title: 'Components/NewGameAlert',
  component: NewGameAlert,
} as ComponentMeta<typeof NewGameAlert>;

const Template: ComponentStory<typeof NewGameAlert> = (args) => <NewGameAlert {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
