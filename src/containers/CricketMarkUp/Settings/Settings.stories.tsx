/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Settings from './Settings';

export default {
  title: 'Containers/CricketMarkUp/Settings',
  component: Settings,
} as ComponentMeta<typeof Settings>;

const Template: ComponentStory<typeof Settings> = (args) => <Settings {...args} />;

export const Default = Template.bind({});
Default.args = {
  targetCount: 10,
  isFinished: false,
};
