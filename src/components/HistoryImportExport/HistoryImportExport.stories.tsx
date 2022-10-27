/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import HistoryImportExport from './HistoryImportExport'

export default {
  title: 'Components/HistoryImportExport',
  component: HistoryImportExport,
} as ComponentMeta<typeof HistoryImportExport>

const Template: ComponentStory<typeof HistoryImportExport> = (args) => <HistoryImportExport {...args} />

export const Default = Template.bind({})
Default.args = {}
