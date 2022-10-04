import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../Button"
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"

interface StepBodyProps {
  title: string
  content: JSX.Element
  prevStepPath?: string | false
  nextStepPath?: string | false
}
export const StepBody = ({
  title,
  content,
  prevStepPath,
  nextStepPath,
}: StepBodyProps) => {
  const navigate = useNavigate()
  return (
    <>
      <h2 className='tw-text-heading-primary tw-mb-6 tw-font-bold tw-text-heading-m'>
        {title}
      </h2>
      {content}
      <hr />
      <div className='tw-flex tw-justify-end tw-space-x-2'>
        {prevStepPath && (
          <Button
            style='secondary'
            label='Back'
            icon={<HiArrowNarrowLeft />}
            onClick={() => {
              navigate(prevStepPath)
            }}
          />
        )}
        {nextStepPath && (
          <Button
            label='Save'
            icon={<HiArrowNarrowRight />}
            trailingIcon={true}
            onClick={() => {
              navigate(nextStepPath)
            }}
          />
        )}
      </div>
    </>
  )
}
