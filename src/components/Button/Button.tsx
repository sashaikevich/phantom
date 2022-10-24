import React from "react"
import { classNames } from "../../utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "warning"
}

export const Button = ({
  variant = "secondary",
  children,
  className: passedStyles = "",
  ...props
}: ButtonProps) => {
  const sharedClasses =
    "tw-cursor-pointer tw-rounded-full  tw-text-lg tw-font-semibold tw-px-5 tw-py-1.5 tw-border-2 "
  const secondaryClasses =
    " tw-text-redi-primary tw-bg-redi-light-bg hover:tw-bg-redi-light-bg/80 tw-border-redi-primary tw-drop-shadow-floating-blue"
  const warningClasses =
    " tw-text-redi-danger-dark tw-border-redi-danger-dark hover:tw-bg-redi-danger-bg/80"
  const primaryClasses =
    " tw-text-redi-primary tw-bg-redi-primary tw-text-redi-light-bg hover:tw-bg-redi-primary-toggle hover:tw-border-redi-primary-toggle tw-border-redi-primary tw-drop-shadow-floating-blue"

  return (
    <button
      className={classNames(
        sharedClasses,
        variant === "primary" && primaryClasses,
        variant === "secondary" && secondaryClasses,
        variant === "warning" && warningClasses,
        passedStyles
      )}
      type="button"
      {...props}
    >
      <span className="tw-inline-flex tw-items-center">
        {children}
        {/* todo  either animate it or remove the mouth. Also add shadow under it  */}
      </span>
    </button>
  )
}
