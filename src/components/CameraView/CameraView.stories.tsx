import type { Meta, StoryObj } from '@storybook/react';
import CameraView from './CameraView';

const meta: Meta<typeof CameraView> = { component: CameraView, title: 'Components/CameraView' };

export default meta;
type Story = StoryObj<typeof CameraView>;
export const Default: Story = {};
