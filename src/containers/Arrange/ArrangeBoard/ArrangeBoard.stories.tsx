/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArrangeBoard from './ArrangeBoard';

export default {
  title: 'Containers/Arrange/ArrangeBoard',
  component: ArrangeBoard,
} as ComponentMeta<typeof ArrangeBoard>;

const Template: ComponentStory<typeof ArrangeBoard> = (args) => <ArrangeBoard {...args} />;

export const Default = Template.bind({});
Default.args = {
  range: { x: 44, y: 44 },
  simulation: true,
};
