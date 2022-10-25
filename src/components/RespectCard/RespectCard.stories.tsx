/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import RespectCard from './RespectCard'

export default {
  title: 'Components/RespectCard',
  component: RespectCard,
} as ComponentMeta<typeof RespectCard>

const Template: ComponentStory<typeof RespectCard> = (args) => <RespectCard {...args} />

export const Default = Template.bind({})
Default.args = {}
