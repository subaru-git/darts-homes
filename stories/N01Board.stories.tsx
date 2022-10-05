import React from 'react'
import N01Board from '../components/N01Board'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/N01Board',
  component: N01Board,
} as ComponentMeta<typeof N01Board>

const Template: ComponentStory<typeof N01Board> = (args) => <N01Board {...args} />

export const Default = Template.bind({})
Default.args = {
  data: [
    [501, 401, 321],
    [501, 441],
  ],
}
