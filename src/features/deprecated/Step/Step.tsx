import React from "react"
import { NavLink, matchPath, useLocation } from "react-router-dom"
import { HiOutlineX, HiCheck } from "react-icons/hi"
import { makeUrlPathFromTitle } from "../../../utils"
import { StepStatus } from "../../../components/deprecated/demo-page/setup"

interface StepProps {
  title: string
  validateStep: () => StepStatus
}
type StepIconType = JSX.Element | undefined

export const Step = ({ title, validateStep }: StepProps) => {
  const status = validateStep()
  const location = useLocation()

  let stepIcon = {} as StepIconType
  let stepStatusClasses = ""
  let isActive = false

  isActive = matchPath(
    `/step/${makeUrlPathFromTitle(title)}`,
    location.pathname
  )
    ? true
    : false

  if (isActive) {
    stepIcon = (
      <div className='tw-w-2 tw-h-2 tw-bg-white tw-border-2 tw-border-highlight tw-border-solid tw-rounded-full'></div>
    )
  } else if (status === "valid") {
    stepStatusClasses = "tw-text-success"
    stepIcon = (
      <span className='tw-bg-white tw-w-6 tw-h-6 tw-rounded-full tw-flex tw-justify-center tw-items-center'>
        <HiCheck className='tw-fill-current tw-stroke-current tw-opacity-50' />
      </span>
    )
  } else if (status === "invalid") {
    stepStatusClasses = "tw-text-error"
    stepIcon = (
      <span className='tw-bg-white tw-w-6 tw-h-6 tw-rounded-full tw-flex tw-justify-center tw-items-center'>
        <HiOutlineX className='tw-fill-current tw-stroke-current tw-opacity-50' />
      </span>
    )
  } else {
    stepIcon = (
      <div className='tw-w-2 tw-h-2 tw-bg-white tw-border-2 tw-border-white tw-border-solid tw-rounded-full'></div>
    )
  }

  return (
    <>
      <div className={"tw-flex tw-items-center tw-space-x-3 last:sibling:tw-hidden" + " " + stepStatusClasses}>
        <div className='tw-flex tw-justify-center tw-item-center tw-w-7'>
          {stepIcon}
        </div>
        <NavLink to={"step/" + makeUrlPathFromTitle(title)}>
          <span className={isActive ? "tw-font-bold" : "tw-font-medium"}>{title}</span>
        </NavLink>
      </div>
      <div className='tw-my-2'>
        <div className='tw-flex tw-justify-center tw-item-center tw-w-7'>
          <div className='tw-w-[1px] tw-h-4 tw-bg-gray-300 tw-block tw-ml-[-1px]'></div>
        </div>
      </div>
    </>
  )
}
