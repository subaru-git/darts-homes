import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import CricketMarkUpHistoryTable from './HistoryTable';

const meta: Meta<typeof CricketMarkUpHistoryTable> = {
  component: CricketMarkUpHistoryTable,
  title: 'Containers/TopsAndTens/HistoryTable',
};

export default meta;
type Story = StoryObj<typeof CricketMarkUpHistoryTable>;
export const Default: Story = {
  args: {
    history: [
      {
        uuid: uuidv4(),
        result: 45,
        scores: [
          ['D20', 'D20', 'D20'],
          ['D20', 'D20', 'D20'],
          ['D20', 'D20', 'D20'],
        ],
        playedAt: '2022-11-16T01:44:01.238Z',
      },
    ],
  },
};
