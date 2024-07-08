import type { Meta, StoryObj } from '@storybook/react';
import RoundScore from './RoundScore';

const meta: Meta<typeof RoundScore> = { component: RoundScore, title: 'Components/RoundScore' };

export default meta;
type Story = StoryObj<typeof RoundScore>;
export const Default: Story = { args: { scores: ['19T', '0', 'D-BULL'], isFinished: false } };
export const Finished: Story = { args: { scores: [], isFinished: true } };
