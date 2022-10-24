import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ViewToggle } from "."
import { ViewModeType } from "../d"
import {
  withWrapAndLabel,
  withViewContext,
  withRouter,
} from "../../../../.storybook/decorators"

export default {
  title: "Phantom Setup/ViewToggle",
  component: ViewToggle,
  parameters: {
    componentSubtitle:
      "Allow user to toggle visibility of settings sections by selecting different views.",
  },
  decorators: [withWrapAndLabel, withViewContext, withRouter],
} as ComponentMeta<typeof ViewToggle>

const storyViews: ViewModeType[] = [
  { label: "Quick Setup", slug: "quick" },
  { label: "All settings", slug: "all" },
  { label: "JSON", slug: "json" },
]
const Template: ComponentStory<typeof ViewToggle> = args => (
  <ViewToggle {...args} />
)

export const Default = Template.bind({})
Default.args = { viewModes: storyViews }

Default.argTypes = {
  viewModes: { table: { disable: true } },
}
