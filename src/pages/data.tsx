import React from 'react'

import { BsLinkedin } from "react-icons/bs"

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
  title: "LinkedIn Connect",
  icon: <BsLinkedin />,
  steps: [
    { title: "Connect to LinkedIn", content: <h1>step 1</h1> },
    { title: "Profiles to invite", content: <h1>step 2</h1> },
    { title: "Message content", content: <h1>step 3</h1> },
    { title: "Settings", content: <h1>step 4</h1> },
  ],
}
