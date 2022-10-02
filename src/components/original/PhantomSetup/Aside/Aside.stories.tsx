import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Aside } from "./Aside"

export default {
  title: "Phantom/Aside/Aside",
  component: Aside,
} as ComponentMeta<typeof Aside>

const Template: ComponentStory<typeof Aside> = args => <Aside {...args} />

export const Default = Template.bind({})

Default.args = {
  // steps = [{ title: "step1", content: "xxx" }, { title: "step2", content: "xxx" }],
}
