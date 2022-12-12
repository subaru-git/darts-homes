import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserMenu from './UserMenu';

export default {
  title: 'Components/UserMenu',
  component: UserMenu,
} as ComponentMeta<typeof UserMenu>;

const Template: ComponentStory<typeof UserMenu> = (args) => <UserMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
