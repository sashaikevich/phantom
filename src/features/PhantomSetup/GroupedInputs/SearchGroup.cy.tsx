import React from "react"
import { composeStories } from "@storybook/react"
import { mount } from "@cypress/react"
// import { Base } from "./SearchGroup.stories"
import * as stories from "./SearchGroup.stories"

const {Base} = composeStories(stories)

it("Should empty the field when clicking the cross", () => {
  // and mount the story using @cypress/react library
  mount(<Base />)

  // then run our tests
  cy.get("svg").click()
  // cy.get("input").then((i) => expect(i.val()).to.be.empty);
})
