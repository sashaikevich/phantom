import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { LaunchButton } from "."

export default {
  title: "Phantom/Launch Button",
  component: LaunchButton,
} as ComponentMeta<typeof LaunchButton>

const Template: ComponentStory<typeof LaunchButton> = args => (
  <LaunchButton {...args}/>
)

export const Enabled = Template.bind({})
Enabled.args = { disabled: false }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
