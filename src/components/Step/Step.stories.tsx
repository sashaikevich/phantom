import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Step } from "."

export default {
  title: "Phantom/Step",
  component: Step,
} as ComponentMeta<typeof Step>

const Template: ComponentStory<typeof Step> = args => <Step {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  status: "default",
  text: "Step 1",
}
