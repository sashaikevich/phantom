import React from "react"
import { IoPlay } from "react-icons/io5"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

import { StepType } from "../../../components/deprecated/demo-page/setup"
import {Step} from "../Step"

interface AsideProps {
  children?: React.ReactNode
  steps: StepType[]
}

export const Aside = ({ steps }: AsideProps) => {
  // const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   e.preventDefault()
  // }

  return (
    <aside className='tw-w-full md:tw-flex-[0_1_240px] xl:tw-flex-[0_1_400px] lg:tw-mr-12'>
      <div className='tw-mb-8'>
        {steps.map((step, i) => {
          return (
            <Step key={i} title={step.title} validateStep={step.validateStep} />
          )
        })}
      </div>
      <div>
        <p className='tw-text-body-l tw-font-bold tw-text-heading-secondary tw-mb-2'>
          Setup demo video
        </p>
        <a
          href='#'
          className='tw-group tw-relative tw-flex tw-justify-center tw-items-center tw-mb-4'
        >
          <img
            className='tw-rounded-lg tw-card-shadow'
            src='https://img.youtube.com/vi/BIPyXFkwnR8/maxresdefault.jpg'
            alt=''
          />
          <span className='tw-flex tw-justify-center tw-items-center tw-absolute tw-w-10 tw-h-10 tw-bg-highlight tw-rounded-md group-hover:tw-bg-hover'>
            <IoPlay className='tw-fill-white tw-w-5 tw-h-5' />
          </span>
        </a>
        <a
          href='#'
          className='tw-text-body-l tw-font-medium tw-text-highlight hover:tw-text-hover tw-flex tw-items-center'
        >
          <span>More information about this Phantom</span>
          {
            <HiOutlineArrowNarrowRight className='tw-fill-current tw-stroke-current tw-ml-2' />
          }
        </a>
      </div>
    </aside>
  )
}
