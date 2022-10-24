// TODO switch to mdx?
import React, { Component } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Text } from "."
import { HelpLink } from "../HelpLink"

export default {
  title: "Phantom Setup/Text",
  Component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const All = () => {
  return (
    <ul className="">
      <li>
        <Text variant="section-title">Section Title</Text>
      </li>
      <li>
        <Text variant="label-lg">Large label</Text>
      </li>
      <li>
        <Text variant="label-md">Medium label</Text>
      </li>
      <li>
        <Text variant="label-sm">Small label</Text>
      </li>
      <li>
        <Text>Undefined</Text>
      </li>
      <li>
        <Text variant="help">Help link size</Text>
      </li>
    </ul>
  )
}

export const Playground = Template.bind({})
Playground.args = {
  variant: "label-lg",
  el: "span",
  children: "text",
}
