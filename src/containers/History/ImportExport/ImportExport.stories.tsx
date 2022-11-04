/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImportExport from './ImportExport';

export default {
  title: 'Containers/History/ImportExport',
  component: ImportExport,
} as ComponentMeta<typeof ImportExport>;

const Template: ComponentStory<typeof ImportExport> = (args) => <ImportExport {...args} />;

export const Default = Template.bind({});
Default.args = {};
