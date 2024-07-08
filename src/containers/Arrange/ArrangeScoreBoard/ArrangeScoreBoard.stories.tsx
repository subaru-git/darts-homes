import type { Meta, StoryObj } from '@storybook/react';
import ArrangeScoreBoard from './ArrangeScoreBoard';

const meta: Meta<typeof ArrangeScoreBoard> = {
  component: ArrangeScoreBoard,
  title: 'Containers/Arrange/ArrangeScoreBoard',
};

export default meta;
type Story = StoryObj<typeof ArrangeScoreBoard>;
export const Default: Story = {};
