import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { SearchGroup } from "./SearchGroup"

import { decorators } from "../../../../.storybook/decorators"

export default {
  title: "Phantom Setup/Search Group",
  component: SearchGroup,
  parameters: {
    componentSubtitle:
      "Collects the search query, or url to spreadsheet. If spreadsheet detected, automatically prompts user to enter the data column.",
  },
  decorators: decorators,
} as ComponentMeta<typeof SearchGroup>

const Template = () => <SearchGroup />
export const Base = Template.bind({})
