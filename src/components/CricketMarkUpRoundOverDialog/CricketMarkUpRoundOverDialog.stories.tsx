/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CricketMarkUpRoundOverDialog from './CricketMarkUpRoundOverDialog'

export default {
  title: 'Components/RoundOverDialog',
  component: CricketMarkUpRoundOverDialog,
} as ComponentMeta<typeof CricketMarkUpRoundOverDialog>

const Template: ComponentStory<typeof CricketMarkUpRoundOverDialog> = (args) => (
  <CricketMarkUpRoundOverDialog {...args} />
)

export const Default = Template.bind({})
Default.args = {}
