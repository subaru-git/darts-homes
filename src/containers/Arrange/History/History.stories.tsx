import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import History from './History';

export default {
  title: 'Containers/Arrange/History',
  component: History,
} as ComponentMeta<typeof History>;

const Template: ComponentStory<typeof History> = (args) => <History {...args} />;

export const Default = Template.bind({});
Default.args = {};
