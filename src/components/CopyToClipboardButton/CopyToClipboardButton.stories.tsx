import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CopyToClipboardButton from './CopyToClipboardButton';

export default {
  title: 'Components/CopyToClipboardButton',
  component: CopyToClipboardButton,
} as ComponentMeta<typeof CopyToClipboardButton>;

const Template: ComponentStory<typeof CopyToClipboardButton> = (args) => <CopyToClipboardButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
