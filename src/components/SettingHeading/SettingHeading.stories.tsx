import type { Meta, StoryObj } from '@storybook/react';
import SettingHeading from './SettingHeading';

const meta: Meta<typeof SettingHeading> = {
  component: SettingHeading,
  title: 'Components/SettingHeading',
};

export default meta;
type Story = StoryObj<typeof SettingHeading>;
export const Default: Story = {
  args: { title: 'Setting', hintHeader: 'Hint', hintBody: 'This is a hint' },
};
