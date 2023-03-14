import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScoreBoard from './ScoreBoard';

export default {
  title: 'Components/ScoreBoard',
  component: ScoreBoard,
} as ComponentMeta<typeof ScoreBoard>;

const Template: ComponentStory<typeof ScoreBoard> = (args) => <ScoreBoard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      Scored: '',
      ToGo: '501',
      Hits: null,
    },
    {
      Scored: '180',
      ToGo: '321',
      Hits: ['T20', 'T20', 'T20'],
    },
    {
      Scored: '180',
      ToGo: '141',
      Hits: ['T20', 'T20', 'T20'],
    },
    {
      Scored: '129',
      ToGo: '12',
      Hits: ['T20', 'T19', '12'],
    },
    {
      Scored: 'B',
      ToGo: '12',
      Hits: ['D12', '0', '0'],
    },
    {
      Scored: '-',
      ToGo: '12',
      Hits: ['OUT', 'OUT', 'OUT'],
    },
    {
      Scored: '',
      ToGo: '②',
      Hits: ['OUT', 'D6', '0'],
    },
  ],
};
