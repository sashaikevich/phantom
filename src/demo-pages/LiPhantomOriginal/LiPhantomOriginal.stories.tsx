import { ComponentStory, ComponentMeta } from "@storybook/react"
import { LiPhantomOriginal } from "."

export default {
  title: "DEMO/Original Linked In Setup",
  component: LiPhantomOriginal,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LiPhantomOriginal>

const Template: ComponentStory<typeof LiPhantomOriginal> = args => (
  <LiPhantomOriginal />
)

export const SettingsFormat = Template.bind({})
export const JSONFormat = Template.bind({})

SettingsFormat.args = {}
