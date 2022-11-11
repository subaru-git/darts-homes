/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import List from './List';

export default {
  title: 'Components/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {};
