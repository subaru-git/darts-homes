import type { Meta, StoryObj } from '@storybook/react';
import LanguageChangeButton from './LanguageChangeButton';

const meta: Meta<typeof LanguageChangeButton> = {
  component: LanguageChangeButton,
  title: 'Components/LanguageChangeButton',
};

export default meta;
type Story = StoryObj<typeof LanguageChangeButton>;
export const Default: Story = {};
