/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AppDefaultSeo from './AppDefaultSeo';

export default {
  title: 'Components/AppDefaultSeo',
  component: AppDefaultSeo,
} as ComponentMeta<typeof AppDefaultSeo>;

const Template: ComponentStory<typeof AppDefaultSeo> = (args) => <AppDefaultSeo {...args} />;

export const Default = Template.bind({});
Default.args = {};
