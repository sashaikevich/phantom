import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { withWrapAndLabel } from "../../../.storybook/decorators"

import { InfoBox } from "./InfoBox"

export default {
  title: "Components/InfoBox",
  component: InfoBox,
  parameters: {
    componentSubtitle:
      "Remind or warn users of important things by calling attention to them.",
  },
  argTypes: {
    children: {
      description: "Provide a string, or element(s).",
      control: "text",
    },
    variant: {
      options: ["notice", "warning"],
      description:
        "Notice/Warning sevarity is communicated with color and icon style",
      control: { type: "radio" },
    },
  },
  decorators: [withWrapAndLabel],
} as ComponentMeta<typeof InfoBox>

const Template: ComponentStory<typeof InfoBox> = args => <InfoBox {...args} />

export const Notice = Template.bind({})
Notice.args = {
  children: "A reminder or note",
  variant: "notice",
}

export const Warning = Template.bind({})
Warning.parameters = {
  docs: {
    storyDescription:
      "To callout information with more dangerous consequences a warning style is recommended",
  },
}
Warning.args = {
  children: "A more critical warning",
  variant: "warning",
}

export const WarningCustom = Template.bind({})
WarningCustom.parameters = {
  docs: {
    storyDescription:
      'Component accepts text strings, or element(s). The prepending "<strong">Note / Warning</strong>" and some of the style will be automatically removed if elements are provided.',
  },
}

WarningCustom.argTypes = {
  children: {
    description: "Component accepts a string, or element(s).",
    control: "object",
  },
}
WarningCustom.storyName = "Non-string children"

WarningCustom.args = {
  children: (
    <p>
      Child elements like{" "}
      <a href="#" className="tw-underline hover:tw-no-underline">
        links
      </a>
      , and <span className="tw-font-bold">styling</span> can also be provided.
    </p>
  ),
  variant: "notice",
}
