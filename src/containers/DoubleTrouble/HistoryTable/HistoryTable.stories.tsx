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
        ['1D', '1D', '1D'],
        ['2D', '2D', '2D'],
        ['3D', '3D', '3D'],
        ['4D', '4D', '4D'],
        ['5D', '5D', '5D'],
        ['6D', '6D', '6D'],
        ['7D', '7D', '7D'],
        ['8D', '8D', '8D'],
        ['9D', '9D', '9D'],
        ['10D', '10D', '10D'],
        ['11D', '11D', '11D'],
        ['12D', '12D', '12D'],
        ['13D', '13D', '13D'],
        ['14D', '14D', '14D'],
        ['15D', '15D', '15D'],
        ['16D', '16D', '16D'],
        ['17D', '17D', '17D'],
        ['18D', '18D', '18D'],
        ['19D', '19D', '19D'],
        ['20D', '20D', '20D'],
      ],
      playedAt: '2022-11-16T01:44:01.238Z',
    },
  ],
};
