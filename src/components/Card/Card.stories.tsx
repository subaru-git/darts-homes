import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = { component: Card, title: 'Components/Card' };

export default meta;
type Story = StoryObj<typeof Card>;
export const Default: Story = { args: { children: <p>The Card</p> } };
