import type { Meta, StoryObj } from '@storybook/react';
import Board from './Board';

const meta: Meta<typeof Board> = { component: Board, title: 'Containers/CricketMarkUp/Board' };

export default meta;
type Story = StoryObj<typeof Board>;
export const Default: Story = {
  args: {
    scores: [
      { number: 20, count: 3, total: 1 },
      { number: 19, count: 2, total: 1 },
      { number: 18, count: 1, total: 1 },
      { number: 17, count: 7, total: 1 },
      { number: 16, count: 5, total: 1 },
      { number: 15, count: 6, total: 1 },
      { number: 25, count: 4, total: 1 },
    ],
  },
};
