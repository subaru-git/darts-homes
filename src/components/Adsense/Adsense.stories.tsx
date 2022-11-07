/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Adsense from './Adsense';

export default {
  title: 'Components/Adsense',
  component: Adsense,
} as ComponentMeta<typeof Adsense>;

const Template: ComponentStory<typeof Adsense> = (args) => <Adsense {...args} />;

export const Default = Template.bind({});
Default.args = {};
