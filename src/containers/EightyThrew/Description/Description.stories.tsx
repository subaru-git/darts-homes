/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Description from './Description';

export default {
  title: 'Containers/EightyThrew/Description',
  component: Description,
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => <Description {...args} />;

export const Default = Template.bind({});
Default.args = {};
