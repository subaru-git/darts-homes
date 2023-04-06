import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import AppTag from './AppTag';

export default {
  title: 'Components/AppTag',
  component: AppTag,
} as ComponentMeta<typeof AppTag>;

const Template: Story<{ tags: string[] }> = (args) => (
  <div className='flex gap-1'>
    {args.tags.map((tag) => (
      <AppTag key={tag} tag={tag} />
    ))}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  tags: [
    'BULL',
    'single',
    'double',
    'master',
    'cricket',
    '19',
    '20',
    'count up',
    'finish',
    'simulation',
  ],
};
