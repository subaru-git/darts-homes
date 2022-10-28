/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import RoundScoreButton from './RoundScoreButton'

export default {
  title: 'Components/RoundScoreButton',
  component: RoundScoreButton,
} as ComponentMeta<typeof RoundScoreButton>

const Template: ComponentStory<typeof RoundScoreButton> = (args) => <RoundScoreButton {...args} />

export const Default = Template.bind({})
Default.args = {}
