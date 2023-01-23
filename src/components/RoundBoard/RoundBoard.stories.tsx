import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RoundBoard from './RoundBoard';

export default {
  title: 'Components/RoundBoard',
  component: RoundBoard,
} as ComponentMeta<typeof RoundBoard>;

const Template: ComponentStory<typeof RoundBoard> = (args) => <RoundBoard {...args} />;

export const Default = Template.bind({});
Default.args = {
  score: [
    ['T20', '20', 'S-BULL'],
    ['19', 'T19', '0'],
  ],
};

export const Overflow = Template.bind({});
Overflow.args = {
  score: [
    ['T20', '20', 'S-BULL'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
    ['19', 'T19', '0'],
  ],
};
