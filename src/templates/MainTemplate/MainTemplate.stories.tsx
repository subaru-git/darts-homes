import type { Meta, StoryObj } from '@storybook/react';
import MainTemplate from './MainTemplate';

const meta: Meta<typeof MainTemplate> = {
  component: MainTemplate,
  title: 'Templates/MainTemplate',
};

export default meta;
type Story = StoryObj<typeof MainTemplate>;
export const Default: Story = { args: { label: 'MainTemplate', children: <p>Template Body</p> } };
export const Loading: Story = {
  args: { label: 'MainTemplate', isLoading: true, children: <p>Template Body</p> },
};
