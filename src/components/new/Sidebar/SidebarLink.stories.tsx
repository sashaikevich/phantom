import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SidebarLink } from "."
import { BsFillPlayCircleFill } from "react-icons/bs"

export default {
  title: "Components/Sidebar",
  component: SidebarLink,
  decorators: [
    Story => (
      <div className="tw-pl-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SidebarLink>

const Template: ComponentStory<typeof SidebarLink> = args => (
  <SidebarLink {...args} />
)

export const All = () => {
  return (
    <div className="">
      <SidebarLink variant="section">Section</SidebarLink>
      <SidebarLink variant="subsection">Subsection</SidebarLink>
      <SidebarLink variant="resource">
        <BsFillPlayCircleFill className="tw-mr-3" />
        Setup tutorial
      </SidebarLink>
    </div>
  )
}

export const Section = Template.bind({})
Section.args = {
  variant: "section",
  children: "link",
}

export const Subsection = Template.bind({})
Subsection.args = {
  variant: "subsection",
  children: "link",
}

export const Resource = Template.bind({})
Resource.args = {
  variant: "resource",
  children: (
    <>
      <BsFillPlayCircleFill className="tw-mr-3" />
      Setup tutorial
    </>
  ),
}
