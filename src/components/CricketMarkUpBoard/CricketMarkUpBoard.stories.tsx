/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CricketMarkUpBoard from './CricketMarkUpBoard'

export default {
  title: 'Components/CricketMarkUpBoard',
  component: CricketMarkUpBoard,
} as ComponentMeta<typeof CricketMarkUpBoard>

const Template: ComponentStory<typeof CricketMarkUpBoard> = (args) => (
  <CricketMarkUpBoard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  data: [
    ['20-3', '20-1', '20-3'],
    ['19-3', '19-1', '19-3'],
  ],
}
