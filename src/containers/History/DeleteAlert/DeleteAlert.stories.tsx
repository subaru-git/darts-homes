/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DeleteAlert from './DeleteAlert';

export default {
  title: 'Containers/History/DeleteAlert',
  component: DeleteAlert,
} as ComponentMeta<typeof DeleteAlert>;

const Template: ComponentStory<typeof DeleteAlert> = (args) => <DeleteAlert {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This will delete all your history',
  isOpen: true,
};
