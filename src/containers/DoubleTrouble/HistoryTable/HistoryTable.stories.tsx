/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import CricketMarkUpHistoryTable from './HistoryTable';

export default {
  title: 'Containers/DoubleTrouble/HistoryTable',
  component: CricketMarkUpHistoryTable,
} as ComponentMeta<typeof CricketMarkUpHistoryTable>;

const Template: ComponentStory<typeof CricketMarkUpHistoryTable> = (args) => (
  <CricketMarkUpHistoryTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  history: [
    {
      uuid: uuidv4(),
      result: 300,
      scores: [
        ['D1', 'D1', 'D1'],
        ['D2', 'D2', 'D2'],
        ['D3', 'D3', 'D3'],
        ['D4', 'D4', 'D4'],
        ['D5', 'D5', 'D5'],
        ['D6', 'D6', 'D6'],
        ['D7', 'D7', 'D7'],
        ['D8', 'D8', 'D8'],
        ['D9', 'D9', 'D9'],
        ['D10', 'D10', 'D10'],
        ['D11', 'D11', 'D11'],
        ['D12', 'D12', 'D12'],
        ['D13', 'D13', 'D13'],
        ['D14', 'D14', 'D14'],
        ['D15', 'D15', 'D15'],
        ['D16', 'D16', 'D16'],
        ['D17', 'D17', 'D17'],
        ['D18', 'D18', 'D18'],
        ['D19', 'D19', 'D19'],
        ['D20', 'D20', 'D20'],
      ],
      playedAt: '2022-11-16T01:44:01.238Z',
    },
  ],
};
