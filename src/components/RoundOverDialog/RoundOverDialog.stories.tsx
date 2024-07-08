import type { Meta, StoryObj } from '@storybook/react';
import RoundOverDialog from './RoundOverDialog';

const meta: Meta<typeof RoundOverDialog> = {
  component: RoundOverDialog,
  title: 'Components/RoundOverDialog',
};

export default meta;
type Story = StoryObj<typeof RoundOverDialog>;
export const Default: Story = { args: { isOpen: true, result: 'Result' } };
