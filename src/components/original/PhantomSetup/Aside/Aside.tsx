import React, { useState } from "react"
import { Step } from "../../Step"

export const Aside:React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setCurrentStep(1)
  }

  return (
    <>
      <Step text="hello" onClick={handleClick} />
      <Step text="hello 2" onClick={handleClick} />
    </>
  )
}
