import React from 'react'
import CricketNumberCountBoard from '../components/CricketNumberCountBoard'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/CricketNumberCountBoard',
  component: CricketNumberCountBoard,
} as ComponentMeta<typeof CricketNumberCountBoard>

const Template: ComponentStory<typeof CricketNumberCountBoard> = (args) => (
  <CricketNumberCountBoard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  data: [
    ['20-3', '20-1', '20-3'],
    ['19-3', '19-1', '19-3'],
  ],
}
