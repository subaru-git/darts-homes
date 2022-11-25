import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CameraView from './CameraView';

export default {
  title: 'Components/CameraView',
  component: CameraView,
} as ComponentMeta<typeof CameraView>;

const Template: ComponentStory<typeof CameraView> = (args) => <CameraView {...args} />;

export const Default = Template.bind({});
Default.args = {};
