import React from 'react'
import BullButton from '../components/BullButton'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/BullButton',
  component: BullButton,
} as ComponentMeta<typeof BullButton>

const Template: ComponentStory<typeof BullButton> = (args) => <BullButton {...args} />

export const Default = Template.bind({})
Default.args = {}
