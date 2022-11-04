/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CricketMarkUpHistoryTable from './HistoryTable';

export default {
  title: 'Containers/DoubleTrouble/HistoryTable',
  component: CricketMarkUpHistoryTable,
} as ComponentMeta<typeof CricketMarkUpHistoryTable>;

const Template: ComponentStory<typeof CricketMarkUpHistoryTable> = (args) => (
  <CricketMarkUpHistoryTable {...args} />
);

export const Default = Template.bind({});
Default.args = {};
