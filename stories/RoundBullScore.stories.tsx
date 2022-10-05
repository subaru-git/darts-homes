import React from 'react'
import RoundBullScore from '../components/RoundBullScore'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/RoundBullScore',
  component: RoundBullScore,
} as ComponentMeta<typeof RoundBullScore>

const Template: ComponentStory<typeof RoundBullScore> = (args) => <RoundBullScore {...args} />

export const Default = Template.bind({})
Default.args = {
  scores: ['19T', '0', 'D-BULL'],
}
