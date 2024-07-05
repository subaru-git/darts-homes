import type { Meta, StoryObj } from '@storybook/react';
import CopyToClipboardButton from './CopyToClipboardButton';

const meta: Meta<typeof CopyToClipboardButton> = {
  component: CopyToClipboardButton,
  title: 'Components/CopyToClipboardButton',
};

export default meta;
type Story = StoryObj<typeof CopyToClipboardButton>;
export const Default: Story = {};
