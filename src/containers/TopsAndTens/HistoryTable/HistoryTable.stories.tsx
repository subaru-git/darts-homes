/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CricketMarkUpHistoryTable from './HistoryTable';

export default {
  title: 'Containers/TopsAndTens/HistoryTable',
  component: CricketMarkUpHistoryTable,
} as ComponentMeta<typeof CricketMarkUpHistoryTable>;

const Template: ComponentStory<typeof CricketMarkUpHistoryTable> = (args) => (
  <CricketMarkUpHistoryTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  history: [
    {
      result: 45,
      scores: [
        ['20D', '20D', '20D'],
        ['20D', '20D', '20D'],
        ['20D', '20D', '20D'],
      ],
      round: 3,
      playedAt: '2022-11-16T01:44:01.238Z',
    },
  ],
};
