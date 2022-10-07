/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CountBullButtons from './CountBullButtons'

export default {
  title: 'Components/CountBullButtons',
  component: CountBullButtons,
} as ComponentMeta<typeof CountBullButtons>

const Template: ComponentStory<typeof CountBullButtons> = (args) => <CountBullButtons {...args} />

export const Default = Template.bind({})
Default.args = {}
