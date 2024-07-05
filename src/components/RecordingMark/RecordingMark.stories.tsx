import type { Meta, StoryObj } from '@storybook/react';
import RecordingMark from './RecordingMark';

const meta: Meta<typeof RecordingMark> = {
  component: RecordingMark,
  title: 'Components/RecordingMark',
};

export default meta;
type Story = StoryObj<typeof RecordingMark>;
export const Default: Story = {
  args: { recording: false },
  render: (args) => (
    <div style={{ width: '35px', height: '35px', fontSize: '35px' }}>
      <RecordingMark {...args} />
    </div>
  ),
};
