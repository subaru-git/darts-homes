import type { Meta, StoryObj } from '@storybook/react';
import Board from './Board';

const meta: Meta<typeof Board> = { component: Board, title: 'Containers/N01/Board' };

export default meta;
type Story = StoryObj<typeof Board>;
export const Default: Story = {
  args: {
    data: [
      [501, 401, 321],
      [501, 441],
    ],
  },
};
