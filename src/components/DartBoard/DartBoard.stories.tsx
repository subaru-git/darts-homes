import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DartBoard from './DartBoard';

export default {
  title: 'Components/DartBoard',
  component: DartBoard,
} as ComponentMeta<typeof DartBoard>;

const Template: ComponentStory<typeof DartBoard> = (args) => (
  <div css={{ width: '640px', height: '640px' }}>
    <DartBoard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
