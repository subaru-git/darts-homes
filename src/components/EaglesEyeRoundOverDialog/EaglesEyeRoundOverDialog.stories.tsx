/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import EaglesEyeRoundOverDialog from './EaglesEyeRoundOverDialog'

export default {
  title: 'Components/RoundOverDialog',
  component: EaglesEyeRoundOverDialog,
} as ComponentMeta<typeof EaglesEyeRoundOverDialog>

const Template: ComponentStory<typeof EaglesEyeRoundOverDialog> = (args) => (
  <EaglesEyeRoundOverDialog {...args} />
)

export const Default = Template.bind({})
Default.args = {}
