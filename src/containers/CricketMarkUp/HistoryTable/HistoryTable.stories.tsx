import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import HistoryTable from './HistoryTable';

const meta: Meta<typeof HistoryTable> = {
  component: HistoryTable,
  title: 'Containers/CricketMarkUp/HistoryTable',
};

export default meta;
type Story = StoryObj<typeof HistoryTable>;
export const Default: Story = {
  args: {
    history: [
      {
        uuid: uuidv4(),
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
  },
};
