/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CricketNumberCountSettings from './CricketNumberCountSettings'

export default {
  title: 'Components/CricketNumberCountSettings',
  component: CricketNumberCountSettings,
} as ComponentMeta<typeof CricketNumberCountSettings>

const Template: ComponentStory<typeof CricketNumberCountSettings> = (args) => (
  <CricketNumberCountSettings {...args} />
)

export const Default = Template.bind({})
Default.args = {
  targetCount: 10,
  isFinished: false,
}
