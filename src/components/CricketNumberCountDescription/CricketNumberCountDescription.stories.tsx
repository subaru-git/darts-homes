/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CricketNumberCountDescription from './CricketNumberCountDescription'

export default {
  title: 'Components/CricketNumberCountDescription',
  component: CricketNumberCountDescription,
} as ComponentMeta<typeof CricketNumberCountDescription>

const Template: ComponentStory<typeof CricketNumberCountDescription> = (args) => (
  <CricketNumberCountDescription {...args} />
)

export const Default = Template.bind({})
Default.args = {}
