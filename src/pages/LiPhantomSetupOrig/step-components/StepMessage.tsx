import React from "react"
import { InfoBox } from "../../../components/original/InfoBox"
import { InputField } from "../../../components/original/InputField"
import { StepStatus } from "../data"

export const StepMessage = () => {
  return (
    <>
      <InfoBox className="tw-mb-8">
        <p>
          Here you can write a custom message to be included in the invites
          you're sending.
        </p>
      </InfoBox>
      <InputField
        label='Your message'
        type='textarea'
        placeholder={`Hey #firstName#, let's connect! \nBest regards`}
        notice={[
          "Use the placeholder tag #firstName# to personalize your message by inserting the first name of the person you're adding.",
          "LinkedIn limits you to 300 characters per message. Keep in mind if you're using the #firstName# tag that the length of the names may be longer than the placeholder and increase your character count.",
          "Leave this field empty to send invites without a message.",
        ]}
      />
    </>
  )
}

export function validateStepMessage(): StepStatus {
  return "valid"
}
