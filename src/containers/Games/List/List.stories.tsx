import type { Meta, StoryObj } from '@storybook/react';
import List from './List';

const meta: Meta<typeof List> = { component: List, title: 'Containers/Games/List' };

export default meta;
type Story = StoryObj<typeof List>;
export const Default: Story = {};
