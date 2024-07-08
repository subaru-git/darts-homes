import type { Meta, StoryObj } from '@storybook/react';
import RoundScoreButton from './RoundScoreButton';

const meta: Meta<typeof RoundScoreButton> = {
  component: RoundScoreButton,
  title: 'Components/RoundScoreButton',
};

export default meta;
type Story = StoryObj<typeof RoundScoreButton>;
export const Default: Story = { args: { isFinished: false } };
export const Finished: Story = { args: { isFinished: true, disabled: false, result: 'Result' } };
