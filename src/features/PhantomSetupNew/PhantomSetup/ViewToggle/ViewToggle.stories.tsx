import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ViewToggle } from "."
import { ViewModeType } from "../../d"
import { decorators } from "../../../../../.storybook/decorators"
export default {
  title: "Phantom Setup/ViewToggle",
  component: ViewToggle,
  decorators: decorators,
  parameters: {
    componentSubtitle:
      "Allow user to toggle visibility of settings sections by selecting different views.",
  },
} as ComponentMeta<typeof ViewToggle>

const storyViews: ViewModeType[] = [
  { label: "Quick setup", slug: "quick" },
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
