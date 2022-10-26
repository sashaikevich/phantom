import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { withWrapAndLabel } from "../../../../.storybook/decorators"
import { Text } from "../Text"

import { CalloutBox } from "."

export default {
  title: "Phantom Setup/CalloutBox",
  component: CalloutBox,
  parameters: {
    componentSubtitle:
      "Wrap additional input fields on Flow/Phantom setup pages that were revealed by a condition.",
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: "docs",
  },
  argTypes: {
    showFlag: {
      description:
        "Toggle the blue flag to the left of the box to draw extra attention to box",
      control: { type: "inline-radio" },
      options: [true, false],
    },
    children: {
      description:
        "Additional input field(s) along with any custom message and styling.",
      control: false,
    },
    isVisible: {
      description:
        "Parameter is passed to the CalloutBox to animate its visibility.",
      control: false,
    },
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
  isVisible: true,
  children: (
    <div className="tw-flex tw-items-center ">
      <Text>
        Spreadsheet detected; Please select the
        <span className="tw-font-bold tw-not-italic tw-ml-1 ">data column</span>
        :
      </Text>
      <select
        id="column"
        name="dataColumn"
        className="tw-block tw-w-36 tw-rounded-md tw-py-1 tw-ml-2 tw-border-redi-placeholder"
      >
        <option disabled selected value="">
          column
        </option>
        <option value="A">Oct. Li Searches</option>
        <option value="B">Assigned to</option>
        <option value="C">Lead Health</option>
      </select>
    </div>
  ),
}
