/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Board from './Board';

export default {
  title: 'Containers/N01/Board',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    [501, 401, 321],
    [501, 441],
  ],
};
