import React, { useState } from "react"
import { HiOutlineChevronUp } from "react-icons/hi"

export const ExpandableSection = ({
  children,
  triggerText,
}: React.PropsWithChildren & { triggerText: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className='tw-flex tw-space-x-2 tw-items-center tw-mb-8'
        onClick={e => {
          e.preventDefault()
          setIsOpen(open => !open)
        }}
      >
        <h5 className='tw-text-heading-primary tw-font-bold tw-text-heading-s '>
          {triggerText}
        </h5>
        <span
          className={`"tw-flex tw-items-center tw-justify-center tw-text-icon-primary tw-text-icon-l tw-ml-1 tw-transition tw-ease-in-out tw-duration-300 ${
            isOpen ? "" : "tw-rotate-180"
          }`}
        >
          <HiOutlineChevronUp />
        </span>
      </button>
      <div className={isOpen ? "" : "tw-hidden"}>{children}</div>
    </>
  )
}
