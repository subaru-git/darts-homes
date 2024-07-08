import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import HistoryTable from './HistoryTable';

const meta: Meta<typeof HistoryTable> = {
  component: HistoryTable,
  title: 'Containers/AroundTheCompass/HistoryTable',
};

export default meta;
type Story = StoryObj<typeof HistoryTable>;
export const Default: Story = {
  args: {
    history: [
      {
        uuid: uuidv4(),
        result: 45,
        scores: [
          ['D12', 'D12', 'D12'],
          ['D12', 'D12', 'D12'],
          ['D12', 'D12', 'D12'],
        ],
        round: 3,
        playedAt: '2022-11-16T01:44:01.238Z',
      },
    ],
  },
};
