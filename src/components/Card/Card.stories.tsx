/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Containers/Respect/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <p>The Card</p>
  </Card>
);

export const Default = Template.bind({});
Default.args = {};
