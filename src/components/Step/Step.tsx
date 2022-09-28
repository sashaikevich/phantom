import React from "react"

interface StepProps {
  text: string
  status: "default" | "error" | "success"
}

export function Step({ text, status = "default" }: StepProps) {
  return (
    <div className='tw-flex tw-items-center'>
      <div className='tw-w-3 tw-h-3 tw-mr-2 tw-flex tw-justify-center tw-items-center'>
        <div className='tw-p-auto tw-rounded-full tw-bg-base tw-flex tw-justify-center tw-items-center tw-w-1 tw-h-1 tw-border-solid tw-border-highlight tw-border-2'></div>
      </div>
      <a href='#'>
        <span className='tw-font-qanelas tw-select-none tw-text-body-primary tw-font-bold tw-text-body-l'>
          {text}
        </span>
      </a>

<div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
</div>
    </div>
  )
}
