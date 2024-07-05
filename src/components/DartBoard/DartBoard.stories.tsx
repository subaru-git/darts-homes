import type { Meta, StoryObj } from '@storybook/react';
import DartBoard from './DartBoard';

const meta: Meta<typeof DartBoard> = { component: DartBoard, title: 'Components/DartBoard' };

export default meta;
type Story = StoryObj<typeof DartBoard>;
export const Default: Story = {
  render: () => (
    <div css={{ width: '640px', height: '640px' }}>
      <DartBoard onCount={() => {}} />
    </div>
  ),
};
