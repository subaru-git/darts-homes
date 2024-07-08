import type { Meta, StoryObj } from '@storybook/react';
import Players from './Players';

const meta: Meta<typeof Players> = { component: Players, title: 'Containers/N01/Players' };

export default meta;
type Story = StoryObj<typeof Players>;
export const Default: Story = { args: { players: ['Player 1', 'Player 2'] } };
