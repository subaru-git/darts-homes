/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CountButtons from './CountButtons'

export default {
  title: 'Components/CountButtons',
  component: CountButtons,
  parameters: { locales: ['en', 'ja'] },
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

export const MobileCricketMarkUp = Template.bind({})
MobileCricketMarkUp.args = {
  begin: 20,
  end: 20,
  reversed: true,
  bull: false,
  other: true,
}

export const MobileCricketMarkUpBull = Template.bind({})
MobileCricketMarkUpBull.args = {
  begin: 0,
  end: 0,
  reversed: true,
  bull: true,
  other: true,
}
