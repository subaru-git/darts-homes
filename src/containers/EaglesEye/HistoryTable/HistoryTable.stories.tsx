import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import HistoryTable from './HistoryTable';

const meta: Meta<typeof HistoryTable> = {
  component: HistoryTable,
  title: 'Containers/EaglesEye/HistoryTable',
};

export default meta;
type Story = StoryObj<typeof HistoryTable>;
export const Default: Story = {
  args: {
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
  },
};
