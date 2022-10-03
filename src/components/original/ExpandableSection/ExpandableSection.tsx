import React, { useState } from "react"

export const ExpandableSection = ({
  children,
  triggerText,
}: React.PropsWithChildren & { triggerText: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={e => {
          e.preventDefault()
          setIsOpen(open => !open)
        }}
      >
        {triggerText}
      </button>
      <div className={isOpen ? "" : "tw-hidden"}>{children}</div>
    </>
  )
}
