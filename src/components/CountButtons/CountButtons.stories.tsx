import type { Meta, StoryObj } from '@storybook/react';
import CountButtons from './CountButtons';

const meta: Meta<typeof CountButtons> = {
  component: CountButtons,
  title: 'Components/CountButtons',
};

export default meta;
type Story = StoryObj<typeof CountButtons>;
export const Default: Story = {
  args: { buttons: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
};
export const Disabled: Story = {
  args: {
    buttons: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    disabled: true,
    bull: true,
    other: true,
  },
};
export const Cricket: Story = {
  args: { buttons: [20, 19, 18, 17, 16, 15] },
};
export const MobileCricketMarkUp: Story = {
  args: { buttons: [20], bull: false, other: true },
};
export const MobileCricketMarkUpBull: Story = {
  args: { buttons: [], bull: true, other: true },
};
export const Full: Story = {
  args: { buttons: [], bull: true, full: true },
};
export const FullWithoutBull: Story = {
  args: { buttons: [20], full: true },
};
