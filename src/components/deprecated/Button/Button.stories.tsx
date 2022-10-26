import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { withWrapAndLabel } from "../../../../.storybook/decorators"

import { Button } from "./Button"
import { BsQuestionCircle } from "react-icons/bs"

export default {
  title: "Deprecated/Button",
  component: Button,
  decorators: [withWrapAndLabel],
  parameters: {
    componentSubtitle:
      "DEPRECATED: These buttons have been deprecated. Use current design instead.",
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: "docs",
  },
  argTypes: {
    label: {
      description: "Provide button text",
      control: "text",
    },
    style: {
      description: "Select button type",
      control: "radio",
    },
    size: {
      description: "Select button size",
      control: "radio",
    },
    trailingIcon: {
      control: false,
    },
    icon: {
      control: false,
    },
    onClick: {
      control: false,
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Playground = Template.bind({})
Playground.args = {
  label: "Button",
  style: "primary",
  size: "base",
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: "Button",
  icon: <BsQuestionCircle />,
  trailingIcon: true,
}
WithIcon.parameters = {
  docs: {
    storyDescription:
      'Buttons can also be styled with an icon',
  },
}

export const All = () => {
  return (
    <>
      <div className="tw-flex tw-justify-start tw-space-x-6 tw-mb-10">
        <Button label="Primary" style="primary" size="lg" />
        <Button label="Primary" style="primary" size="base" />
        <Button label="Primary" style="primary" size="sm" />
      </div>
      <div className="tw-flex tw-justify-start tw-space-x-6 tw-mb-10">
        <Button label="Secondary" style="secondary" size="lg" />
        <Button label="Secondary" style="secondary" size="base" />
        <Button label="Secondary" style="secondary" size="sm" />
      </div>
      <div className="tw-flex tw-justify-start tw-space-x-6 ">
        <Button label="Warning" style="tertiary" size="lg" />
        <Button label="Warning" style="tertiary" size="base" />
        <Button label="Warning" style="tertiary" size="sm" />
      </div>
    </>
  )
}
