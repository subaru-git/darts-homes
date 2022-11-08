/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Camera from './CameraView';

export default {
  title: 'Components/Camera',
  component: Camera,
} as ComponentMeta<typeof Camera>;

const Template: ComponentStory<typeof Camera> = (args) => <Camera {...args} />;

export const Default = Template.bind({});
Default.args = {};
