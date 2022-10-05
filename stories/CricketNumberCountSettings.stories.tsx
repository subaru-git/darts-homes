import React from 'react'
import CricketNumberCountSettings from '../components/CricketNumberCountSettings'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/CricketNumberCountSettings',
  component: CricketNumberCountSettings,
} as ComponentMeta<typeof CricketNumberCountSettings>

const Template: ComponentStory<typeof CricketNumberCountSettings> = (args) => (
  <CricketNumberCountSettings {...args} />
)

export const Default = Template.bind({})
Default.args = {}
