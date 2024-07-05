import type { Meta, StoryObj } from '@storybook/react';
import ImportExport from './ImportExport';

const meta: Meta<typeof ImportExport> = {
  component: ImportExport,
  title: 'Containers/History/ImportExport',
};

export default meta;
type Story = StoryObj<typeof ImportExport>;
export const Default: Story = {};
