import type { Meta, StoryObj } from '@storybook/react';
import Targets from './Targets';

const meta: Meta<typeof Targets> = { component: Targets, title: 'Containers/Arrange/Targets' };

export default meta;
type Story = StoryObj<typeof Targets>;
export const Default: Story = { args: { targets: [180, 32], count: 8, isFinished: false } };
