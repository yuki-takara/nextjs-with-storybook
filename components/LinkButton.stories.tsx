import React from 'react'
import { Story, Meta } from '@storybook/react'

import LinkButton, { LinkButtonProps } from './LinkButton'

export default {
  title: 'Design System/Atoms/Button',
  component: LinkButton,
  argTypes: {
    bgc: { control: 'color' },
  },
} as Meta

const Template: Story<LinkButtonProps> = args => <LinkButton {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {}
DefaultButton.storyName = 'デフォルトのボタン'
DefaultButton.decorators = [
  Story => (
    <div
      style={{ backgroundColor: '#000', height: '100px', display: 'flex', alignItems: 'center' }}
    >
      <Story />
    </div>
  ),
]

export const RedButton = Template.bind({})
RedButton.args = {
  bgc: '#f00',
}
RedButton.storyName = '赤いボタン'
