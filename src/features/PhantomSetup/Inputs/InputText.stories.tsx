import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { decorators } from "../../../../.storybook/decorators"
import { InputText } from "./InputText"

export default {
  title: "Phantom Setup/Input Text",
  component: InputText,
  decorators: decorators,
  parameters: {
    componentSubtitle:
      "Use this flexible text field on Phantom/Flow setup pages.",
  },
  argTypes: {
    mappedName: {
      description:
        "All fields required for any Phantom/Flow setup are typed and stored together. This input will collect a value that must be mapped to one of these fields.",
      control: false,
    },
    label: {
      description: "Text instructions to user.",
      control: { type: "text" },
    },
    helpLink: {
      description:
        'Link object consisting of a text/url pair that will add a "_blank" target link below the input.',
    },
    required: {
      table: {
        disable: true,
      },
    },
    optional: {
      control: { type: "inline-radio" },
      options: [true, false],
    },
    multiline: {
      control: { type: "inline-radio" },
      options: [true, false],
    },
  },
} as ComponentMeta<typeof InputText>

const Template: ComponentStory<typeof InputText> = args => (
  <InputText {...args} />
)

export const Playground = Template.bind({})
Playground.args = {
  label: "Enter your information",
  mappedName: "personalizedMsg",
  helpLink: { text: "Learn more here", url: "" },
  placeholder: "Your information can be long or short",
}
