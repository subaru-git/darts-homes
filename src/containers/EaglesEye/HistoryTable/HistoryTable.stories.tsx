/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import HistoryTable from './HistoryTable';

export default {
  title: 'Containers/EaglesEye/HistoryTable',
  component: HistoryTable,
} as ComponentMeta<typeof HistoryTable>;

const Template: ComponentStory<typeof HistoryTable> = (args) => <HistoryTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: [
    {
      uuid: uuidv4(),
      result: 1050,
      scores: [
        ['D-BULL', 'S-BULL', '0'],
        ['0', 'S-BULL', 'D-BULL'],
        ['D-BULL', 'D-BULL', 'D-BULL'],
        ['D-BULL', 'D-BULL', 'D-BULL'],
        ['D-BULL', 'D-BULL', 'D-BULL'],
        ['D-BULL', 'D-BULL', 'D-BULL'],
        ['D-BULL', 'D-BULL', 'D-BULL'],
        ['D-BULL', 'D-BULL', 'D-BULL'],
      ],
      playedAt: '2022-11-16T01:44:01.238Z',
    },
  ],
};
