import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EditableScoreBoard from './EditableScoreBoard';

export default {
  title: 'Components/EditableScoreBoard',
  component: EditableScoreBoard,
} as ComponentMeta<typeof EditableScoreBoard>;

const Template: ComponentStory<typeof EditableScoreBoard> = (args) => (
  <EditableScoreBoard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  score: [10, 20, 30, 40, 50, 60, 70, 80],
};
