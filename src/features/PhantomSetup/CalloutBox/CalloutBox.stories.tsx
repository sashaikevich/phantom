import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { withWrapAndLabel } from "../../../../.storybook/decorators"
import { Text } from "../Text"

import { CalloutBox } from "."

export default {
  title: "Phantom Setup/CalloutBox",
  component: CalloutBox,
  argTypes: {
    showFlag: {
      description:
        "Toggle the blue flag to the left of the box to draw extra attention to box",
      control: "boolean",
    },
    children: {
      description:
        "Additional input field(s) along with any custom message and styling.",
      control: "object",
    },
  },
  parameters: {
    componentSubtitle:
      "Wrap additional input fields, that were revealed by a condition.",
  },
  decorators: [
    Story => {
      return (
        <div className="tw-pl-8">
          <Story />
        </div>
      )
    },
    withWrapAndLabel,
  ],
} as ComponentMeta<typeof CalloutBox>

const Template: ComponentStory<typeof CalloutBox> = args => (
  <CalloutBox {...args} />
)

export const WithFlag = Template.bind({})
WithFlag.args = {
  showFlag: true,
  children: (
    <div className="tw-flex tw-items-center">
      <Text>Something requires an additional input:</Text>
      <select
        id="column"
        name="ExampleOptions"
        className="tw-block tw-w-36 tw-rounded-md tw-py-1 tw-ml-2 tw-border-redi-placeholder"
      >
        <option value="A">Option 1</option>
        <option value="B">Option 2</option>
        <option value="C">Option 3</option>
      </select>
    </div>
  ),
}
