import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import CricketMarkUpHistoryTable from './HistoryTable';

const meta: Meta<typeof CricketMarkUpHistoryTable> = {
  component: CricketMarkUpHistoryTable,
  title: 'Containers/DoubleTrouble/HistoryTable',
};

export default meta;
type Story = StoryObj<typeof CricketMarkUpHistoryTable>;
export const Default: Story = {
  args: {
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
  },
};
