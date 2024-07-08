import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = { component: RadioButton, title: 'Atoms/RadioButton' };

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    values: [
      { value: 'single', label: 'Single Out' },
      { value: 'double', label: 'Double Out' },
      { value: 'master', label: 'Master Out' },
    ],
    defaultValue: 'master',
    disabled: false,
    onChange: () => {},
  },
};
