import React from "react"
import { mount } from "@cypress/react"
import { Base } from "./SearchGroup.stories"

it("Should empty the field when clicking the cross", () => {
  // and mount the story using @cypress/react library
  mount(<Base />)

  // then run our tests
  cy.get("svg").click()
  // cy.get("input").then((i) => expect(i.val()).to.be.empty);
})
