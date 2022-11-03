/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeDescription from './HomeDescription';

export default {
  title: 'Components/HomeDescription',
  component: HomeDescription,
} as ComponentMeta<typeof HomeDescription>;

const Template: ComponentStory<typeof HomeDescription> = (args) => <HomeDescription {...args} />;

export const Default = Template.bind({});
Default.args = {};
