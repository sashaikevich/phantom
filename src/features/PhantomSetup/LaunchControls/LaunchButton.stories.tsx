import React from "react"

import { withFakeContext } from "../../../../.storybook/decorators"
import { Meta, Story } from "@storybook/react"

import { LaunchButton } from "./LaunchButton"

export default {
  title: "Experimental/Launch Button",
  component: LaunchButton,
  decorators: [withFakeContext],
  parameters: {
    componentSubtitle:
      "EXPERIMENTAL Launch button for Phantom/Flow launch controls.",
  },
  argTypes: {
    overrides: {
      isValid: true,
      table: {
        disable: true,
      },
    },
    children: {
      description: 'The default "Launch" text can be overridden',
      control: { type: "text" },
    },
    disabled: {
      description: "",
      control: { type: "inline-radio" },
      options: [true, false],
    },
  },
} as Meta<typeof LaunchButton>

const Template: Story<typeof LaunchButton> = args => <LaunchButton {...args} />

export const Enabled = Template.bind({})
Enabled.args = { disabled: false }
