/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import HistoryDeleteAlert from './HistoryDeleteAlert'

export default {
  title: 'Components/HistoryDeleteAlert',
  component: HistoryDeleteAlert,
} as ComponentMeta<typeof HistoryDeleteAlert>

const Template: ComponentStory<typeof HistoryDeleteAlert> = (args) => (
  <HistoryDeleteAlert {...args} />
)

export const Default = Template.bind({})
Default.args = {
  message: 'This will delete all your history',
  isOpen: true,
}
