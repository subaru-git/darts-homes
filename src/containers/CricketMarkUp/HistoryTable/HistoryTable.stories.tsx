/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HistoryTable from './HistoryTable';

export default {
  title: 'Containers/CricketMarkUp/HistoryTable',
  component: HistoryTable,
} as ComponentMeta<typeof HistoryTable>;

const Template: ComponentStory<typeof HistoryTable> = (args) => <HistoryTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: [
    {
      result: 8,
      scores: [
        { number: 20, count: 3, total: 1 },
        { number: 19, count: 3, total: 1 },
        { number: 18, count: 3, total: 1 },
        { number: 17, count: 3, total: 1 },
        { number: 16, count: 3, total: 1 },
        { number: 15, count: 3, total: 1 },
        { number: 25, count: 3, total: 2 },
      ],
      targetCount: 3,
      playedAt: '2022-11-16T01:44:01.238Z',
    },
  ],
};
