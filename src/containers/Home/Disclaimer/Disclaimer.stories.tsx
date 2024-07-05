import type { Meta, StoryObj } from '@storybook/react';
import Disclaimer from './Disclaimer';

const meta: Meta<typeof Disclaimer> = {
  component: Disclaimer,
  title: 'Containers/Home/Description',
};

export default meta;
type Story = StoryObj<typeof Disclaimer>;
export const Default: Story = {};
