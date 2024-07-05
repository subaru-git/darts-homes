import type { Meta, StoryObj } from '@storybook/react';
import AppDefaultSeo from './AppDefaultSeo';

const meta: Meta<typeof AppDefaultSeo> = {
  component: AppDefaultSeo,
  title: 'Components/AppDefaultSeo',
};

export default meta;
type Story = StoryObj<typeof AppDefaultSeo>;
export const Default: Story = {};
