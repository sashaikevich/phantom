import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { withWrapAndLabel } from "../../../../.storybook/decorators"

import { InfoBox } from "."

export default {
  title: "Components/InfoBox",
  component: InfoBox,
  argTypes: {
    children: {
      description: "Component accepts a string, or element(s).",
      control: "text",
    },
    variant: {
      options: ["notice", "warning"],
      control: "radio",
    },
  },
  parameters: {
    componentSubtitle:
      "Remind or warn users of important things by calling attention to them.",
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
Warning.args = {
  children: "A more critical warning",
  variant: "warning",
}

export const WarningCustom = Template.bind({})
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
