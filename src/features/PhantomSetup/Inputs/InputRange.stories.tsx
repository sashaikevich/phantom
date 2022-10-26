import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { decorators } from "../../../../.storybook/decorators"
import { InputRange } from "./InputRange"

export default {
  title: "Phantom Setup/Input Range",
  component: InputRange,
  decorators: [
    Story => {
      return (
        <div className="tw-p-5">
          <Story />
        </div>
      )
    },
    ...decorators,
  ],
  parameters: {
    componentSubtitle: "Use this range input on Phantom/Flow setup pages.",
  },
  argTypes: {
    mappedName: {
      description:
        "All fields required for any Phantom/Flow setup are typed and stored together. This input will collect a value that must be mapped to one of these fields.",
      control: false,
    },
    min: {
      description: "Minimal value",
      control: { type: "number" },
    },
    max: {
      description: "Maximal value",
      control: { type: "number" },
    },
    width: {
      options: ["sm", "md", "lg", "full"],
      default: "sm",
      control: { type: "select" },
    },
    warning: {
      description:
        "Callout riskier changes a user can make using the warning style.",
      options: [true, false],
      control: { type: "inline-radio" },
    },
    showLabels: {
      description:
        "Optional field, which will provide the min/max by default, or can be overridden.",
      options: [true, false],
      control: { type: "inline-radio" },
    },
    labelLow: {
      description: "Label values can be overridden",
      control: { type: "text" },
    },
    labelHigh: {
      description: "Label values can be overridden",
      control: { type: "text" },
    },
    numSteps: {
      description:
        "The input is stepped by default, but if set to 0 it will be overridden. ",
      control: { type: "number" },
    },
    showTooltip: {
      description: "Tooltip showing value can be hidden",
      options: [true, false],
      default: true,
      control: { type: "inline-radio" },
    },
    tooltipOverride: {
      description: "The tooltip can be expanded with additional information via callback function.",
      control: { type: false },
    },
  },
} as ComponentMeta<typeof InputRange>

const Template: ComponentStory<typeof InputRange> = args => (
  <InputRange {...args} />
)

export const Playground = Template.bind({})
Playground.args = {
  mappedName: "maxParallelExecutions",
  min: 0,
  max: 20,
  width: "sm",
}
