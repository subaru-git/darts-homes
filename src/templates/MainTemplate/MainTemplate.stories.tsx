import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainTemplate from './MainTemplate';

export default {
  title: 'Templates/MainTemplate',
  component: MainTemplate,
} as ComponentMeta<typeof MainTemplate>;

const Template: ComponentStory<typeof MainTemplate> = (args) => (
  <MainTemplate {...args}>
    <p>Template Body</p>
  </MainTemplate>
);

export const Default = Template.bind({});
Default.args = {
  label: 'MainTemplate',
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'MainTemplate',
  isLoading: true,
};
