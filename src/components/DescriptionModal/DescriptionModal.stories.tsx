import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DescriptionModal from './DescriptionModal';

export default {
  title: 'Components/DescriptionModal',
  component: DescriptionModal,
} as ComponentMeta<typeof DescriptionModal>;

const Template: ComponentStory<typeof DescriptionModal> = (args) => <DescriptionModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
