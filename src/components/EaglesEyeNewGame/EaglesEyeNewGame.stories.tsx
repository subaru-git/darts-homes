/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import EaglesEyeNewGame from './EaglesEyeNewGame'

export default {
  title: 'Components/EaglesEyeNewGame',
  component: EaglesEyeNewGame,
} as ComponentMeta<typeof EaglesEyeNewGame>

const Template: ComponentStory<typeof EaglesEyeNewGame> = (args) => <EaglesEyeNewGame {...args} />

export const Default = Template.bind({})
Default.args = {}
