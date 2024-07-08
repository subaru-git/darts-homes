import type { Meta, StoryObj } from '@storybook/react';
import CountBullButtons from './CountBullButtons';

const meta: Meta<typeof CountBullButtons> = {
  component: CountBullButtons,
  title: 'Components/CountBullButtons',
};

export default meta;
type Story = StoryObj<typeof CountBullButtons>;
export const Default: Story = { args: { disabled: false } };
