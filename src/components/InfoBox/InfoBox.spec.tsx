import React from "react"
import { render, screen } from "@testing-library/react"
import { Notice, Warning, WarningCustom } from "./InfoBox.stories"
import { InfoBoxProps } from "./InfoBox"

describe("Different variations of InfoBox", () => {
  it("Should render a Notice variant with a string child", () => {
    render(<Notice {...(Notice.args as InfoBoxProps)} />)
    expect(screen.getByText(/note:/i)).toBeVisible()
  })

  it("Should render a Warning variant with a string child", () => {
    render(<Warning {...(Warning.args as InfoBoxProps)} />)
    expect(screen.getByText(/warning:/i)).toBeVisible()
  })

  it("Should render a Warning variant with a node child", () => {
    render(<WarningCustom {...(WarningCustom.args as InfoBoxProps)} />)
    expect(screen.getByTestId("warning-variant")).toBeVisible()
    expect(
      screen
        .getByTestId("warning-variant")
        .getElementsByClassName("tw-text-redi-danger-dark")
    ).toBeTruthy()
    expect(screen.getByTestId("warning-variant")).toBeVisible()
    expect(screen.getByTestId("warning-variant").innerHTML).not.toEqual("")

    // expect(screen.getByTestId("warning-variant")).closest('a').toHaveAttribute('href')
  })
})
