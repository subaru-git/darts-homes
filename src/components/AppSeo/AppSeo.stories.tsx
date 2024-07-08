import type { Meta, StoryObj } from '@storybook/react';
import AppSeo from './AppSeo';

const meta: Meta<typeof AppSeo> = { component: AppSeo, title: 'Components/AppSeo' };

export default meta;
type Story = StoryObj<typeof AppSeo>;
export const Default: Story = {
  args: {
    title: 'AppSep Stories',
    description: 'AppSep Stories.',
    canonical: 'https://darts.homes',
  },
};
