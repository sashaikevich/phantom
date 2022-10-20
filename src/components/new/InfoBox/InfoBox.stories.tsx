import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { InfoBox } from "."

export default {
  title: "Components/InfoBox",
  component: InfoBox,
  decorators: [
    Story => (
      <div className="tw-m-w-[700]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof InfoBox>

const Template: ComponentStory<typeof InfoBox> = args => <InfoBox {...args} />

export const Notice = Template.bind({})
Notice.args = {
  children: "A reminder or note",
  type: "notice",
}

export const WarningCustom = Template.bind({})
WarningCustom.storyName = "Notice Alt"
WarningCustom.args = {
  children: <p>Custom text, <a href="#" className="tw-underline hover:tw-no-underline">links</a>, and <span className="tw-font-bold">styling</span> can also be provided.</p>,
  type: "notice",
}

export const Warning = Template.bind({})
Warning.args = {
  children: "A more critical warning",
  type: "warning",
}

