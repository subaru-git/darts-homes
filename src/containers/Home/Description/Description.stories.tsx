import type { Meta, StoryObj } from '@storybook/react';
import Description from './Description';

const meta: Meta<typeof Description> = {
  component: Description,
  title: 'Containers/Home/Description',
};

export default meta;
type Story = StoryObj<typeof Description>;
export const Default: Story = {};
