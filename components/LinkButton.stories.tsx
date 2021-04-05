import React from 'react'
import { Story, Meta } from '@storybook/react'

import LinkButton, { LinkButtonProps } from './LinkButton'

export default {
  title: 'Design System/Atoms/Button',
  component: LinkButton
} as Meta

const Template: Story<LinkButtonProps> = (args) => <LinkButton {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {}

export const RedButton = Template.bind({})
RedButton.args = {
  bgc: '#f00'
}
