import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "."

export default {
  title: "Components/Buttons",
  component: Button,
  argTypes: {
    variant: { control: 'radio' },
  },
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

<div>oh look some text</div>

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
