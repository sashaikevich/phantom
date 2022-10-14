import React from "react"
import { TiWarningOutline, TiWarning } from "react-icons/ti"
import { classNames } from "../../../utils"

interface InfoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  type?: "notice" | "warning"
}

export const InfoBox = ({
  children,
  type = "notice",
  className: passedStyles,
}: InfoBoxProps) => {
  const sharedClasses = "tw-rounded-lg tw-px-3 tw-py-3 tw-flex tw-items-start tw-text-redi-ss"

  const noticeClasses = "tw-bg-redi-light-bg "
  const warningClasses = "tw-bg-redi-danger-bg "

  const isNotice = type === "notice"
  return (
    <div
      className={classNames(
        passedStyles,
        sharedClasses,
        isNotice ? noticeClasses : warningClasses,
      )}
    >
      {isNotice ? (
        <span className="tw-mr-3 tw--mt-0.5">
          <TiWarningOutline className="tw-w-5 tw-h-5 tw-fill-redi-primary-dark" />
        </span>
      ) : (
        <span className="tw-mr-3 tw--mt-0.5">
          <TiWarning className="tw-w-5 tw-h-5 tw-fill-redi-danger-dark" />
        </span>
      )}
      <div className={isNotice ? "tw-text-redi-primary-dark" : "tw-text-redi-danger-dark"}>
        {children}
      </div>
    </div>
  )
}
