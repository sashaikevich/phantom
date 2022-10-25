import React from "react"
import { withSetupContext } from "../../../../.storybook/decorators"
import { Meta, Story } from "@storybook/react"

import { LaunchButton } from "."

export default {
  title: "Experimental/Launch Button",
  component: LaunchButton,
  decorators: [withSetupContext],
} as Meta<typeof LaunchButton>

const Template: Story<typeof LaunchButton> = args => <LaunchButton {...args} />

export const Enabled = Template.bind({})
Enabled.args = { disabled: false }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }