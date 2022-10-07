/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import RoundBoard from './RoundBoard'

export default {
  title: 'Components/RoundBoard',
  component: RoundBoard,
} as ComponentMeta<typeof RoundBoard>

const Template: ComponentStory<typeof RoundBoard> = (args) => <RoundBoard {...args} />

export const Default = Template.bind({})
Default.args = {
  score: [
    ['20T', '20', 'S-BULL'],
    ['19', '19T', '0'],
  ],
}
