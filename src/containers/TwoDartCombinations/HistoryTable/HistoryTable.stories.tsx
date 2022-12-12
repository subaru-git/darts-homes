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
        ['17D', '17D', '17D'],
        ['16D', '16D', '16D'],
        ['3', '20D', '0'],
        ['4', '20D', '0'],
        ['13', '16D', '0'],
        ['6', '20D', '0'],
        ['7', '20D', '0'],
        ['16', '16D', '0'],
        ['9', '20D', '0'],
        ['18', '16D', '0'],
        ['11', '20D', '0'],
        ['12', '20D', '0'],
        ['13', '20D', '0'],
        ['14', '20D', '0'],
        ['15', '20D', '0'],
        ['16', '20D', '0'],
        ['17', '20D', '0'],
        ['18', '20D', '0'],
        ['19', '20D', '0'],
        ['20', '20D', '0'],
      ],
      playedAt: '2022-11-16T01:44:01.238Z',
    },
  ],
};
