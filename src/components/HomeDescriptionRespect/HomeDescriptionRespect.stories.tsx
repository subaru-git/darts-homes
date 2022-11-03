/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeDescriptionRespect from './HomeDescriptionRespect';

export default {
  title: 'Components/HomeDescriptionRespect',
  component: HomeDescriptionRespect,
} as ComponentMeta<typeof HomeDescriptionRespect>;

const Template: ComponentStory<typeof HomeDescriptionRespect> = (args) => (
  <HomeDescriptionRespect {...args} />
);

export const Default = Template.bind({});
Default.args = {};
