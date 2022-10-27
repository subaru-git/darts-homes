/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CricketNumberCountSettingModal from './CricketNumberCountSettingModal'

export default {
  title: 'Components/CricketNumberCountSettingModal',
  component: CricketNumberCountSettingModal,
} as ComponentMeta<typeof CricketNumberCountSettingModal>

const Template: ComponentStory<typeof CricketNumberCountSettingModal> = (args) => (
  <CricketNumberCountSettingModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  targetCount: 10,
}
