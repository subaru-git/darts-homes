import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AppAdsense from './AppAdsense';

export default {
  title: 'Components/AppAdsense',
  component: AppAdsense,
} as ComponentMeta<typeof AppAdsense>;

const Template: ComponentStory<typeof AppAdsense> = (args) => <AppAdsense {...args} />;

export const Default = Template.bind({});
Default.args = {};
