import React from "react"
import { render } from "@testing-library/react"
import { InfoBox } from "."

describe("InfoBox", () => {
  it("renders", () => {
    const { queryAllByText } = render(
      <InfoBox variant="notice">Please be advised</InfoBox>
    )
    expect(queryAllByText("Please be advised")).toHaveLength(1)
  })
})
