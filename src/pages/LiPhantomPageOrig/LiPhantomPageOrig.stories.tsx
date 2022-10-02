import { ComponentStory, ComponentMeta } from "@storybook/react"
import { LiPhantomPageOrig } from "."

export default {
  title: "DEMO/Original Linked In Setup",
  component: LiPhantomPageOrig,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LiPhantomPageOrig>

const Template: ComponentStory<typeof LiPhantomPageOrig> = args => (
  <LiPhantomPageOrig />
)

export const SettingsFormat = Template.bind({})
export const JSONFormat = Template.bind({})

SettingsFormat.args = {}
