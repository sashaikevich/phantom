import React from "react"
import { ImCross } from "react-icons/im"
import { BsCheck2 } from "react-icons/bs"

interface StepProps {
  text: string
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  variant?: "initial" | "active" | "error" | "success"
}
interface StepStyleType {
  icon: JSX.Element | undefined
}

export function Step({ text, variant = "initial", onClick }: StepProps) {
  let stepStyle = {} as StepStyleType

  switch (variant) {
    case "initial": {
      // stepStyle = { icon: <div>.</div> }
      break
    }
    case "active": {
      // stepStyle = { icon: <div>=</div> }
      break
    }
    case "error": {
      stepStyle = { icon: <ImCross /> }
      break
    }
    case "success": {
      // stepStyle = { icon: <BsCheck2 /> }
      break
    }
  }

  return (
    <>
      button {variant}
      <div className='flex items-center'>
        <div className='w-3 h-3 mr-2 flex justify-center items-center'></div>
        <a href=''>
          {/* {stepStyle.icon} */}
          <span className='font-qanelas select-none text-body-primary font-bold text-body-l text-red'>
            {text}
          </span>
        </a>
      </div>
    </>
  )
}
