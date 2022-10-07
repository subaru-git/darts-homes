/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Players from './Players'

export default {
  title: 'Components/Players',
  component: Players,
} as ComponentMeta<typeof Players>

const Template: ComponentStory<typeof Players> = (args) => <Players {...args} />

export const Default = Template.bind({})
Default.args = {
  players: ['Player 1', 'Player 2'],
}
