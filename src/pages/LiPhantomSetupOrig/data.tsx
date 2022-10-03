import React from "react"
import {
  StepConnect,
  StepProfiles,
  StepMessage,
  StepSettings,
} from "./step-components"
import { BsLinkedin } from "react-icons/bs"

// todo move phantomtype and steptype to d.ts
export interface PhantomTypeOrig {
  title: string
  icon: JSX.Element
  steps: StepType[]
}

export interface StepType {
  title: string
  content: JSX.Element
}

export const LiPhantomOrig: PhantomTypeOrig = {
  title: "LinkedIn Search to Lead Connection",
  icon: <BsLinkedin className="tw-fill-[#0A66C2]"/>,
  steps: [
    { title: "Connect to LinkedIn", content: <StepConnect /> },
    { title: "Profiles to invite", content: <StepProfiles /> },
    { title: "Message content", content: <StepMessage /> },
    { title: "Settings", content: <StepSettings /> },
  ],
}
