/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CricketNumberCountSettingAlert from './CricketNumberCountSettingAlert'

export default {
  title: 'Components/CricketNumberCountSettingAlert',
  component: CricketNumberCountSettingAlert,
} as ComponentMeta<typeof CricketNumberCountSettingAlert>

const Template: ComponentStory<typeof CricketNumberCountSettingAlert> = (args) => (
  <CricketNumberCountSettingAlert {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
}
