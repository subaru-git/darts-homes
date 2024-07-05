import type { Meta, StoryObj } from '@storybook/react';
import CheckButton from './CheckButton';

const meta: Meta<typeof CheckButton> = { component: CheckButton, title: 'Atoms/CheckButton' };
export default meta;

type Story = StoryObj<typeof CheckButton>;

export const Default: Story = { args: { color: 'green', children: 'CheckButton' } };
