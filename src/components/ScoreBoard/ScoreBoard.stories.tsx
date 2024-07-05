import type { Meta, StoryObj } from '@storybook/react';
import ScoreBoard from './ScoreBoard';

const meta: Meta<typeof ScoreBoard> = { component: ScoreBoard, title: 'Components/ScoreBoard' };

export default meta;
type Story = StoryObj<typeof ScoreBoard>;
export const Default: Story = {
  args: {
    data: [
      {
        Scored: '',
        ToGo: '501',
        Hits: null,
      },
      {
        Scored: '180',
        ToGo: '321',
        Hits: ['T20', 'T20', 'T20'],
      },
      {
        Scored: '180',
        ToGo: '141',
        Hits: ['T20', 'T20', 'T20'],
      },
      {
        Scored: '129',
        ToGo: '12',
        Hits: ['T20', 'T19', '12'],
      },
      {
        Scored: 'B',
        ToGo: '12',
        Hits: ['D12', '0', '0'],
      },
      {
        Scored: '-',
        ToGo: '12',
        Hits: ['OUT', 'OUT', 'OUT'],
      },
      {
        Scored: '',
        ToGo: '②',
        Hits: ['OUT', 'D6', '0'],
      },
    ],
  },
};
