import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta: Meta<typeof Select> = { component: Select, title: 'Atoms/Select' };

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = { args: { options: ['Japan', 'USA', 'China'] } };
export const WithDefaultValue: Story = {
  args: { options: ['Japan', 'USA', 'China'], defaultValue: 'USA' },
};
