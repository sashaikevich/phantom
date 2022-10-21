import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ViewToggle } from "."
import { ViewModeType } from "../../d"

export default {
  title: "Phantom Setup/ViewToggle",
  component: ViewToggle,
  // decorators: [
  //   withSetupContext
  // ]
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
