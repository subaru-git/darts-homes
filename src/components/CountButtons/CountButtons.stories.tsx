/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CountButtons from './CountButtons'

export default {
  title: 'Components/CountButtons',
  component: CountButtons,
} as ComponentMeta<typeof CountButtons>

const Template: ComponentStory<typeof CountButtons> = (args) => <CountButtons {...args} />

export const Default = Template.bind({})
Default.args = {
  begin: 1,
  end: 20,
  reversed: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  begin: 1,
  end: 20,
  reversed: true,
  disabled: true,
}

export const Cricket = Template.bind({})
Cricket.args = {
  begin: 15,
  end: 20,
  reversed: true,
}
