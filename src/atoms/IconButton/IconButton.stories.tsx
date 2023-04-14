import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { MdDeleteForever } from 'react-icons/md';
import IconButton from './IconButton';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: Story<{ colors: string[] }> = (args) => (
  <div className='flex gap-1'>
    {args.colors.map((color) => (
      <IconButton key={color} color={color}>
        <MdDeleteForever size={24} />
      </IconButton>
    ))}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  colors: ['green', 'green-fill', 'blue', 'blue-fill', 'orange', 'orange-fill', 'ghost'],
};
