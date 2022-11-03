/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CricketMark from './CricketMark';

export default {
  title: 'Components/CricketMark',
  component: CricketMark,
} as ComponentMeta<typeof CricketMark>;

const Template: ComponentStory<typeof CricketMark> = (args) => <CricketMark {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 3,
};
