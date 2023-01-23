/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import HistoryTable from './HistoryTable';

export default {
  title: 'Containers/TwoDartCombinations/HistoryTable',
  component: HistoryTable,
} as ComponentMeta<typeof HistoryTable>;

const Template: ComponentStory<typeof HistoryTable> = (args) => <HistoryTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: [
    {
      uuid: uuidv4(),
      result: 270,
      scores: [
        ['D17', 'D17', 'D17'],
        ['D16', 'D16', 'D16'],
        ['3', 'D20', '0'],
        ['4', 'D20', '0'],
        ['13', 'D16', '0'],
        ['6', 'D20', '0'],
        ['7', 'D20', '0'],
        ['16', 'D16', '0'],
        ['9', 'D20', '0'],
        ['18', 'D16', '0'],
        ['11', 'D20', '0'],
        ['12', 'D20', '0'],
        ['13', 'D20', '0'],
        ['14', 'D20', '0'],
        ['15', 'D20', '0'],
        ['16', 'D20', '0'],
        ['17', 'D20', '0'],
        ['18', 'D20', '0'],
        ['19', 'D20', '0'],
        ['20', 'D20', '0'],
      ],
      playedAt: '2022-11-16T01:44:01.238Z',
    },
  ],
};
