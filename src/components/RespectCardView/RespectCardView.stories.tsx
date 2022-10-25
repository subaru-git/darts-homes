/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import RespectCardView from './RespectCardView'

export default {
  title: 'Components/RespectCardView',
  component: RespectCardView,
} as ComponentMeta<typeof RespectCardView>

const Template: ComponentStory<typeof RespectCardView> = (args) => <RespectCardView {...args} />

export const Default = Template.bind({})
Default.args = {}
