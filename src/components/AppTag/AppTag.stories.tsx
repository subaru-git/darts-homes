import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AppTag from './AppTag';

export default {
  title: 'Components/AppTag',
  component: AppTag,
} as ComponentMeta<typeof AppTag>;

const Template: ComponentStory<typeof AppTag> = (args) => <AppTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  tag: 'cricket',
};
