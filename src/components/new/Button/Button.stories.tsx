import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "."

export default {
  title: "Components/Buttons",
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const All = () => {
  return (
    <div className="tw-flex tw-justify-start tw-space-x-6">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="warning">Warning</Button>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  children: "Button",
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: "secondary",
}

export const Warning = Template.bind({})
Warning.args = {
  ...Primary.args,
  variant: "warning",
}
