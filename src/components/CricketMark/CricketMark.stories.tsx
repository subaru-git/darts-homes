import type { Meta, StoryObj } from '@storybook/react';
import CricketMark from './CricketMark';

const meta: Meta<typeof CricketMark> = { component: CricketMark, title: 'Components/CricketMark' };

export default meta;
type Story = StoryObj<typeof CricketMark>;
export const Default: Story = { args: { count: 3 } };
