import React from "react"
import { Link } from "react-router-dom"

import { StepType } from "../../../../pages/LiPhantomSetupOrig/data"
import { makeUrlPath } from "../../../../utils"

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
      {steps.map((step, i) => {
        return (
          <div key={i}>
            <Link to={"step/" + makeUrlPath(step.title)}>{step.title}</Link>
            {i < steps.length - 1 && <hr />}
          </div>
        )
      })}
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
