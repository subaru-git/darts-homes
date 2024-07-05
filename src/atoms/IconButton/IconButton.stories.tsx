import type { Meta, StoryObj } from '@storybook/react';
import { MdDeleteForever } from 'react-icons/md';
import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = { component: IconButton, title: 'Atoms/IconButton' };

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: { color: 'green', children: <MdDeleteForever size={24} /> },
};
