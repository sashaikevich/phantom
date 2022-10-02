import { ComponentStory, ComponentMeta } from "@storybook/react"
import { PhantomSetup } from "."

export default {
  title: "Original/Phantom Setup",
  component: PhantomSetup,
} as ComponentMeta<typeof PhantomSetup>

const Template: ComponentStory<typeof PhantomSetup> = args => <PhantomSetup {...args} />

export const Default = Template.bind({})

Default.args = {
  
}