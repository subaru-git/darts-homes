import type { Meta, StoryObj } from '@storybook/react';
import ArrangeBoard from './ArrangeBoard';

const meta: Meta<typeof ArrangeBoard> = {
  component: ArrangeBoard,
  title: 'Containers/Arrange/ArrangeBoard',
};

export default meta;
type Story = StoryObj<typeof ArrangeBoard>;
export const Default: Story = { args: { range: { x: 44, y: 44 }, simulation: true } };
