import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "."
import { withWrapAndLabel } from "../../../../.storybook/decorators"

export default {
  title: "Components/Buttons",
  component: Button,
  argTypes: {
    variant: { control: "radio" },
  },
  decorators: [withWrapAndLabel],
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Button",
  variant: "secondary",
}

export const All = () => {
  return (
    <div className="tw-flex tw-justify-start tw-space-x-6">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="warning">Warning</Button>
    </div>
  )
}