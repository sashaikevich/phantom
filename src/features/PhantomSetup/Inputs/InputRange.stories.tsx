import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { decorators } from "../../../../.storybook/decorators"
import { InputRange } from "./InputRange"

export default {
  title: "Phantom Setup/Input Range",
  component: InputRange,
  decorators: decorators,
  parameters: {
    componentSubtitle:
      "Use this range input on Phantom/Flow setup pages.",
  },
  argTypes: {
    mappedName: {
      description:
        "All fields required for any Phantom/Flow setup are typed and stored together. This input will collect a value that must be mapped to one of these fields.",
      control: false,
    },
  },
} as ComponentMeta<typeof InputRange>

const Template: ComponentStory<typeof InputRange> = args => (
  <InputRange {...args} />
)

export const Playground = Template.bind({})
Playground.args = {
  min: 0,
  max: 20,
  width: "sm",
  mappedName: "maxParallelExecutions",
}
