import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AppSeo from './AppSeo';

export default {
  title: 'Components/AppSeo',
  component: AppSeo,
} as ComponentMeta<typeof AppSeo>;

const Template: ComponentStory<typeof AppSeo> = (args) => <AppSeo {...args} />;

export const Default = Template.bind({});
Default.args = {
  page: 'cricketmarkup',
};
