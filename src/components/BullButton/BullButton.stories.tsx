/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import BullButton from './BullButton'

export default {
  title: 'Components/BullButton',
  component: BullButton,
} as ComponentMeta<typeof BullButton>

const Template: ComponentStory<typeof BullButton> = (args) => <BullButton {...args} />

export const Default = Template.bind({})
Default.args = {}
