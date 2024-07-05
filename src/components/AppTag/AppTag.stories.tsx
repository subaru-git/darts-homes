import type { Meta, StoryObj } from '@storybook/react';
import AppTag from './AppTag';

const meta: Meta<typeof AppTag> = { component: AppTag, title: 'Components/AppTag' };

export default meta;
type Story = StoryObj<typeof AppTag>;
export const Default: Story = { args: { tag: 'BULL' } };
