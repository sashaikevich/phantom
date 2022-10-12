import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/original/Button"
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"

interface StepBodyProps {
  title: string
  content: React.ReactNode
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
      <h2 className='tw-text-heading-primary tw-mb-4 tw-font-bold tw-text-heading-m'>
        {title}
      </h2>
      {content}

      <div className='tw-flex tw-justify-end tw-space-x-2 tw-mt-4'>
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
