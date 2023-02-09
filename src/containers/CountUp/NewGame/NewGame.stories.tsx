import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NewGame from './NewGame';

export default {
  title: 'Containers/CountUp/NewGame',
  component: NewGame,
} as ComponentMeta<typeof NewGame>;

const Template: ComponentStory<typeof NewGame> = (args) => <NewGame {...args} />;

export const Default = Template.bind({});
Default.args = {};
