/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CountButtons from './CountButtons';

export default {
  title: 'Components/CountButtons',
  component: CountButtons,
  parameters: { locales: ['en', 'ja'] },
} as ComponentMeta<typeof CountButtons>;

const Template: ComponentStory<typeof CountButtons> = (args) => <CountButtons {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttons: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  disabled: true,
  bull: true,
  other: true,
};

export const Cricket = Template.bind({});
Cricket.args = {
  buttons: [20, 19, 18, 17, 16, 15],
};

export const MobileCricketMarkUp = Template.bind({});
MobileCricketMarkUp.args = {
  buttons: [20],
  bull: false,
  other: true,
};

export const MobileCricketMarkUpBull = Template.bind({});
MobileCricketMarkUpBull.args = {
  buttons: [],
  bull: true,
  other: true,
};

export const Full = Template.bind({});
Full.args = {
  buttons: [],
  bull: true,
  full: true,
};

export const FullWithoutBull = Template.bind({});
FullWithoutBull.args = {
  buttons: [20],
  full: true,
};
