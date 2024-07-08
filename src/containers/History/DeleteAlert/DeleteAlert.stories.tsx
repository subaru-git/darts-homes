import type { Meta, StoryObj } from '@storybook/react';
import DeleteAlert from './DeleteAlert';

const meta: Meta<typeof DeleteAlert> = {
  component: DeleteAlert,
  title: 'Containers/History/DeleteAlert',
};

export default meta;
type Story = StoryObj<typeof DeleteAlert>;
export const Default: Story = {
  args: { message: 'This will delete all your history', isOpen: true },
};
