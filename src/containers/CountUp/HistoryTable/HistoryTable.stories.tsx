import type { Meta, StoryObj } from '@storybook/react';
import HistoryTable from './HistoryTable';

const meta: Meta<typeof HistoryTable> = {
  component: HistoryTable,
  title: 'Containers/CountUp/HistoryTable',
};

export default meta;
type Story = StoryObj<typeof HistoryTable>;
export const Default: Story = {};
