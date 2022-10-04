import React from "react"

import { StepType } from "../../../../pages/LiPhantomSetupOrig/data"
import { Step } from "../Step"

interface AsideProps {
  children?: React.ReactNode
  steps: StepType[]
}

export const Aside = ({ steps }: AsideProps) => {
  // const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   e.preventDefault()
  // }

  return (
    <aside className='tw-w-full md:tw-flex-[0_1_240px] xl:tw-flex-[0_1_400px] lg:tw-mr-6'>
      <div className='tw-mb-7'>
        {steps.map((step, i) => {
          return <Step key={i} title={step.title} validateStep={step.validateStep} />
        })}
      </div>
      <div>
        <p>Setup demo video</p>
        <div>
          <img
            src='https://img.youtube.com/vi/BIPyXFkwnR8/maxresdefault.jpg'
            alt=''
          />
        </div>
        <p>More information about this Phantom</p>
      </div>
    </aside>
  )
}
