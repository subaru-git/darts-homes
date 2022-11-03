/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CricketMarkUpDescription from './CricketMarkUpDescription';

export default {
  title: 'Components/CricketMarkUpDescription',
  component: CricketMarkUpDescription,
} as ComponentMeta<typeof CricketMarkUpDescription>;

const Template: ComponentStory<typeof CricketMarkUpDescription> = (args) => (
  <CricketMarkUpDescription {...args} />
);

export const Default = Template.bind({});
Default.args = {};
