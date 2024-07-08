import type { Meta, StoryObj } from '@storybook/react';
import RoundDisplay from './RoundDisplay';

const meta: Meta<typeof RoundDisplay> = {
  component: RoundDisplay,
  title: 'Components/RoundDisplay',
};

export default meta;
type Story = StoryObj<typeof RoundDisplay>;
export const Default: Story = { args: { count: 4, round: true } };
export const Dart: Story = { args: { count: 1, round: false } };
export const Darts: Story = { args: { count: 4, round: false } };
