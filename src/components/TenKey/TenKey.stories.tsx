import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TenKey from './TenKey';

export default {
  title: 'Components/TenKey',
  component: TenKey,
} as ComponentMeta<typeof TenKey>;

const Template: ComponentStory<typeof TenKey> = (args) => <TenKey {...args} />;

export const Default = Template.bind({});
Default.args = {};
