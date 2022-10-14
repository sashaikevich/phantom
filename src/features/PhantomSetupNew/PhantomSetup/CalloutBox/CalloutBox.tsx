import React from "react"
import { MdLabel } from "react-icons/md"

interface CalloutBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  showFlag?: boolean
  showConfirmButton?: true
}

export const CalloutBox = ({
  children,
  showFlag = true,
  className: passedStyles = "",
}: CalloutBoxProps) => {
  return (
    <div
      className={`tw-relative tw-bg-redi-light-bg tw-border-redi-secondary tw-border tw-px-4 tw-py-3 tw-rounded-lg tw-inline-block ${passedStyles}`}
    >
      <div className="">{children}</div>
      {showFlag && (
        <div className="flag tw-absolute tw-right-full tw-top-1/2  tw-translate-y-[-50%] tw-mr-4 tw-drop-shadow-floating-blue">
          <MdLabel className="tw-fill-redi-primary tw-w-5 tw-h-5 " />
        </div>
      )}
    </div>
  )
}
