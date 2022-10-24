import React from "react"
import { InputText } from "../Inputs"

export const LinkedInMsgGroup = () => {
  return (
    <InputText
      label="Personalized message"
      helpLink={{ text: "See how to customize it" }}
      optional={true}
      multiline={true}
      mappedName="personalizedMsg"
      placeholder={`Hey #firstName#, let's connect! \nBest regards`}
    />
  )
}
