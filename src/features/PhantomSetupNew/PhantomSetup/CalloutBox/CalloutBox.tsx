import React from "react"
import { MdLabel } from "react-icons/md"

interface CalloutBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  showFlag?: true
  showConfirmButton?: true
}

export const CalloutBox = ({
  children,
  showFlag,
  className: passedStyles = "",
}: CalloutBoxProps) => {
  return (
    <div
      className={`tw-relative tw-bg-redi-light-bg tw-border-redi-secondary tw-border tw-px-2 tw-py-1 tw-rounded-lg tw-inline-block ${passedStyles}`}
    >
      <div className="">{children}</div>
      <div className="flag tw-absolute tw-right-full tw-top-0 tw-mr-4 tw-mt-1 tw-drop-shadow-floating-blue">
        <MdLabel className="tw-fill-redi-primary tw-w-5 tw-h-5 " />
      </div>
    </div>
  )
}
