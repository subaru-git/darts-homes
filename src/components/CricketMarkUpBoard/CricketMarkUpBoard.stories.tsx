/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CricketMarkUpBoard from './CricketMarkUpBoard';

export default {
  title: 'Components/CricketMarkUpBoard',
  component: CricketMarkUpBoard,
} as ComponentMeta<typeof CricketMarkUpBoard>;

const Template: ComponentStory<typeof CricketMarkUpBoard> = (args) => (
  <CricketMarkUpBoard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  scores: [
    { number: 20, count: 3, total: 1 },
    { number: 19, count: 2, total: 1 },
    { number: 18, count: 1, total: 1 },
    { number: 17, count: 7, total: 1 },
    { number: 16, count: 5, total: 1 },
    { number: 15, count: 6, total: 1 },
    { number: 25, count: 4, total: 1 },
  ],
};
