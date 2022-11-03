/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LanguageChangeButton from './LanguageChangeButton';

export default {
  title: 'Components/LanguageChangeButton',
  component: LanguageChangeButton,
} as ComponentMeta<typeof LanguageChangeButton>;

const Template: ComponentStory<typeof LanguageChangeButton> = (args) => (
  <LanguageChangeButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
