/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Targets from './Targets';

export default {
  title: 'Components/Targets',
  component: Targets,
} as ComponentMeta<typeof Targets>;

const Template: ComponentStory<typeof Targets> = (args) => <Targets {...args} />;

export const Default = Template.bind({});
Default.args = {};
