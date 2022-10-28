/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CricketMarkUpSettings from './CricketMarkUpSettings'

export default {
  title: 'Components/CricketMarkUpSettings',
  component: CricketMarkUpSettings,
} as ComponentMeta<typeof CricketMarkUpSettings>

const Template: ComponentStory<typeof CricketMarkUpSettings> = (args) => (
  <CricketMarkUpSettings {...args} />
)

export const Default = Template.bind({})
Default.args = {
  targetCount: 10,
  isFinished: false,
}
