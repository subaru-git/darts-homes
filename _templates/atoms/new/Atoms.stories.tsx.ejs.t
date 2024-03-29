---
to: src/atoms/<%= name %>/<%= name %>.stories.tsx
---
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import <%= name %> from './<%= name %>';

export default {
  title: 'Atoms/<%= name %>',
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>;

const Template: ComponentStory<typeof <%= name %>> = (args) => <<%= name %> {...args} />;

export const Default = Template.bind({});
Default.args = {};
