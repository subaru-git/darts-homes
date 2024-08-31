import type { Meta, StoryObj } from '@storybook/react';
import NewGame from './NewGame';

const meta: Meta<typeof NewGame> = { component: NewGame, title: 'Containers/CountUp/NewGame' };

export default meta;
type Story = StoryObj<typeof NewGame>;
export const Default: Story = {};