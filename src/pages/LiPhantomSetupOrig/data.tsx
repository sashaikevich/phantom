import React from "react"
import {
  StepConnect,
  StepProfiles,
  StepMessage,
  StepSettings,
  validateStepConnect,
  validateStepProfiles,
  validateStepMessage,
  validateStepSettings,
} from "./step-components"

import { BsLinkedin } from "react-icons/bs"

// todo move phantomtype and steptype to d.ts
export interface PhantomTypeOrig {
  title: string
  icon: JSX.Element
  steps: StepType[]
}

export type StepStatus = "valid" | "invalid" | "initial"

export interface StepType {
  title: string
  content: JSX.Element
  validateStep: () => StepStatus
}

export const LiPhantomOrig: PhantomTypeOrig = {
  title: "LinkedIn Search to Lead Connection",
  icon: <BsLinkedin className='tw-fill-[#0A66C2]' />,
  steps: [
    {
      title: "Connect to LinkedIn",
      content: <StepConnect />,
      validateStep: validateStepConnect,
    },
    {
      title: "Profiles to invite",
      content: <StepProfiles />,
      validateStep: validateStepProfiles,
    },
    {
      title: "Message content",
      content: <StepMessage />,
      validateStep: validateStepMessage,
    },
    {
      title: "Settings",
      content: <StepSettings />,
      validateStep: validateStepSettings,
    },
  ],
}
