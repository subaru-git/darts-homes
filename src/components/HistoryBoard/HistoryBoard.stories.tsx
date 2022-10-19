/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import HistoryBoard from './HistoryBoard'

export default {
  title: 'Components/HistoryBoard',
  component: HistoryBoard,
} as ComponentMeta<typeof HistoryBoard>

const Template: ComponentStory<typeof HistoryBoard> = (args) => <HistoryBoard {...args} />

export const Default = Template.bind({})
Default.args = {}
