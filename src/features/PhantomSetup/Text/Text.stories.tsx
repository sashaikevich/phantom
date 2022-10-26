import React, { Component } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Text } from "."
import { HelpLink } from "../HelpLink"

export default {
  title: "Phantom Setup/Typography",
  Component: Text,
  parameters: {
    componentSubtitle:
      "All text within the Phantom/Flow setup area is build on these settings.",
  },
  argTypes: {
    children: {
      description: "Provide your text",
      control: { type: "text" },
    },
    el: {
      description:
        "By default, text is wrapped in a span. You can select another option.",
      defaultValue: "span",
      options: ["h1", "h2", "h3", "h4", "p", "span"],
      control: false,
    },
    variant: {
      description: "This is a building block on which other styles are build.",
      control: { type: "radio" },
      options: [
        "section-title",
        "label-lg",
        "label-md",
        "label-sm",
        "help",
        "default",
      ],
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const Playground = Template.bind({})
Playground.args = {
  variant: "label-lg",
  el: "span",
  children: "Here is some text",
}

export const All = () => {
  return (
    <ul className="">
      <li className="tw-mb-4">
        <Text variant="section-title">Section Title</Text>
      </li>
      <li className="tw-mb-4">
        <Text variant="label-lg">Large label</Text>
      </li>
      <li className="tw-mb-4">
        <Text variant="label-md">Medium label</Text>
      </li>
      <li className="tw-mb-4">
        <Text variant="label-sm">Small label</Text>
      </li>
      <li className="tw-mb-4">
        <Text>Default text</Text>
      </li>
      <li className="tw-mb-0">
        <Text variant="help">Help link size</Text>
      </li>
    </ul>
  )
}
