import type { Meta, StoryObj } from '@storybook/react';
import DescriptionModal from './DescriptionModal';

const meta: Meta<typeof DescriptionModal> = {
  component: DescriptionModal,
  title: 'Components/DescriptionModal',
};

export default meta;
type Story = StoryObj<typeof DescriptionModal>;
export const Default: Story = {};
