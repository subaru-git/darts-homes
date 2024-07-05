import type { Meta, StoryObj } from '@storybook/react';
import NewGameModal from './NewGameModal';

const meta: Meta<typeof NewGameModal> = {
  component: NewGameModal,
  title: 'Components/NewGameModal',
};

export default meta;
type Story = StoryObj<typeof NewGameModal>;
export const Default: Story = { args: { isFinished: false, settings: <div>Settings</div> } };
