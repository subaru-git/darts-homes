import type { Meta, StoryObj } from '@storybook/react';
import EditableScoreBoard from './EditableScoreBoard';

const meta: Meta<typeof EditableScoreBoard> = {
  component: EditableScoreBoard,
  title: 'Components/EditableScoreBoard',
};

export default meta;
type Story = StoryObj<typeof EditableScoreBoard>;
export const Default: Story = { args: { score: [10, 20, 30, 40, 50, 60, 70, 80] } };
