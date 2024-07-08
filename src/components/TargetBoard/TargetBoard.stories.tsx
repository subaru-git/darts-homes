import type { Meta, StoryObj } from '@storybook/react';
import TargetBoard from './TargetBoard';

const meta: Meta<typeof TargetBoard> = { component: TargetBoard, title: 'Components/TargetBoard' };

export default meta;
type Story = StoryObj<typeof TargetBoard>;
export const Default: Story = { args: { target: '501', message: 'Next Target' } };
