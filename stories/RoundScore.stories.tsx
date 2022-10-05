import React from 'react'
import RoundScore from '../components/RoundScore'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/RoundScore',
  component: RoundScore,
} as ComponentMeta<typeof RoundScore>

const Template: ComponentStory<typeof RoundScore> = (args) => <RoundScore {...args} />

export const Default = Template.bind({})
Default.args = {
  scores: ['19T', '0', 'D-BULL'],
}
