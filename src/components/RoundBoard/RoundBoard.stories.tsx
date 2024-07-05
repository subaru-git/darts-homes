import type { Meta, StoryObj } from '@storybook/react';
import RoundBoard from './RoundBoard';

const meta: Meta<typeof RoundBoard> = { component: RoundBoard, title: 'Components/RoundBoard' };

export default meta;
type Story = StoryObj<typeof RoundBoard>;
export const Default: Story = {
  args: {
    score: [
      ['T20', '20', 'S-BULL'],
      ['19', 'T19', '0'],
    ],
  },
};
export const Overflow: Story = {
  args: {
    score: [
      ['T20', '20', 'S-BULL'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
      ['19', 'T19', '0'],
    ],
  },
};
