/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Disclaimer from './Disclaimer';

export default {
  title: 'Containers/Home/Description',
  component: Disclaimer,
} as ComponentMeta<typeof Disclaimer>;

const Template: ComponentStory<typeof Disclaimer> = (args) => <Disclaimer {...args} />;

export const Default = Template.bind({});
Default.args = {};
