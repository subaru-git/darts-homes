import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RecordingMark from './RecordingMark';

export default {
  title: 'Components/RecordingMark',
  component: RecordingMark,
} as ComponentMeta<typeof RecordingMark>;

const Template: ComponentStory<typeof RecordingMark> = (args) => (
  <div style={{ width: '35px', height: '35px', fontSize: '35px' }}>
    <RecordingMark {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  recording: false,
};
