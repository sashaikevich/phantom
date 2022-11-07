import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ViewToggle } from "."
import { ViewModeType } from "../d"
import {
  withWrapAndLabel,
  withViewContext,
   withRouter 
} from "../../../../.storybook/decorators"


export default {
  title: "Phantom Setup/ViewToggle",
  component: ViewToggle,
  parameters: {
    componentSubtitle:
      "Allow user to toggle which settings are shown in the Phantom/Flow setup area.",
  },
  decorators: [withWrapAndLabel, withViewContext, withRouter],
} as ComponentMeta<typeof ViewToggle>

const Template: ComponentStory<typeof ViewToggle> = args => (
  <ViewToggle {...args} />
)

export const Short = Template.bind({})
Short.args = {
  viewModes: [
    { label: "Quick Setup", slug: "quick" },
    { label: "All Settings", slug: "all" },
  ] as ViewModeType[],
}

export const Long = Template.bind({})
Long.args = {
  viewModes: [
    { label: "Quick Setup", slug: "quick" },
    { label: "XXXXXXX", slug: "xxxx" },
    { label: "YYYYYYY", slug: "yyyy" },
    { label: "ZZZZZZZ", slug: "zzzz" },
    { label: "All Settings", slug: "all" },
    { label: "JSON", slug: "json" },
  ] as ViewModeType[],
}
Long.parameters = {
  docs: {
    storyDescription:
      "Settings Page should be provided an array of view options (comprised of predefined options for consistency across the platform), and the active view is pulled from context. That context updates the sidebar and sections/subsections.",
  },
}

// Default.argTypes = {
//   // viewModes: { table: { disable: true } },
// }
