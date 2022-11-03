/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CricketMarkUpHistoryTable from './EaglesEyeHistoryTable';

export default {
  title: 'Components/EaglesEyeHistoryTable',
  component: CricketMarkUpHistoryTable,
} as ComponentMeta<typeof CricketMarkUpHistoryTable>;

const Template: ComponentStory<typeof CricketMarkUpHistoryTable> = (args) => (
  <CricketMarkUpHistoryTable {...args} />
);

export const Default = Template.bind({});
Default.args = {};
