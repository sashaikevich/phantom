import { ComponentStory, ComponentMeta } from "@storybook/react"
import { LiPhantomSetupOrig } from "."

export default {
  title: "DEMO/Original Linked In Setup",
  component: LiPhantomSetupOrig,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LiPhantomSetupOrig>

const Template: ComponentStory<typeof LiPhantomSetupOrig> = args => (
  <LiPhantomSetupOrig />
)

export const SettingsFormat = Template.bind({})
export const JSONFormat = Template.bind({})

SettingsFormat.args = {}
