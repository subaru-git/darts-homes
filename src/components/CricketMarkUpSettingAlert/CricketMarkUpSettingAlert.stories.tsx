/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CricketMarkUpSettingAlert from './CricketMarkUpSettingAlert'

export default {
  title: 'Components/CricketMarkUpSettingAlert',
  component: CricketMarkUpSettingAlert,
} as ComponentMeta<typeof CricketMarkUpSettingAlert>

const Template: ComponentStory<typeof CricketMarkUpSettingAlert> = (args) => (
  <CricketMarkUpSettingAlert {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
}
