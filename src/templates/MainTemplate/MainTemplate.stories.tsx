import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainTemplate from './MainTemplate';

export default {
  title: 'Components/MainTemplate',
  component: MainTemplate,
} as ComponentMeta<typeof MainTemplate>;

const Template: ComponentStory<typeof MainTemplate> = (args) => <MainTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {};
