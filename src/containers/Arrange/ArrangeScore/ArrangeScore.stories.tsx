import type { Meta, StoryObj } from '@storybook/react';
import ArrangeScore from './ArrangeScore';

const meta: Meta<typeof ArrangeScore> = {
  component: ArrangeScore,
  title: 'Containers/Arrange/ArrangeScore',
};

export default meta;
type Story = StoryObj<typeof ArrangeScore>;
export const Default: Story = { args: { score: '275', round: '351', pro: false } };
