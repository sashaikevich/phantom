import React from "react"
import { Link } from "react-router-dom"

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
  return (
    <>
      <h2 className="tw-text-heading-primary tw-mb-6 tw-font-bold tw-text-heading-m" >{title}</h2>
      {content}
      <hr />
      <div>
        {prevStepPath && <Link to={prevStepPath}>prev</Link>}
        {nextStepPath && <Link to={nextStepPath}>next</Link>}
      </div>
    </>
  )
}
