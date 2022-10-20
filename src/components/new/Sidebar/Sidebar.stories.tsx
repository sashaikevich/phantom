import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Sidebar } from "."

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [
    Story => (
      <div className="tw-bg-redi-light-bg tw-w-[300px] tw-pl-24 tw-pb-32 tw-pt-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar />

export const PhantomMenu = Template.bind({})
