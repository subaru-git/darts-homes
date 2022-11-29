/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Respect from './Respect';

export default {
  title: 'Containers/Home/Respect',
  component: Respect,
} as ComponentMeta<typeof Respect>;

const Template: ComponentStory<typeof Respect> = (args) => <Respect {...args} />;

export const Default = Template.bind({});
Default.args = {};
