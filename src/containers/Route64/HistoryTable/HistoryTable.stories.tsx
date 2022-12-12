import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import HistoryTable from './HistoryTable';

export default {
  title: 'Containers/Route64/HistoryTable',
  component: HistoryTable,
} as ComponentMeta<typeof HistoryTable>;

const Template: ComponentStory<typeof HistoryTable> = (args) => <HistoryTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: [
    {
      uuid: uuidv4(),
      result: 0,
      scores: [
        ['20D', '20D', '20D'],
        ['16', '16', '16'],
        ['20', '20', '20'],
      ],
      round: 3,
      playedAt: '2022-11-16T01:44:01.238Z',
    },
  ],
};
