import React from "react"
import { classNames } from "../../../utils"
import { Spirit } from "../../../assets/Spirit"
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "branded" | "warning"
  shadow?: boolean
}

export const Button = ({
  shadow = true,
  variant = "secondary",
  children,
  className: passedStyles = "",
  ...props
}: ButtonProps) => {
  const sharedClasses =
    "tw-cursor-pointer tw-rounded-full  tw-text-lg tw-font-semibold tw-px-5 tw-py-1.5 tw-border-2 "
  const secondaryClasses =
    " tw-text-redi-primary tw-bg-redi-light-bg hover:tw-bg-redi-light-bg/80 tw-border-redi-primary tw-drop-shadow-floating-blue"
  const warningClasses = " tw-text-redi-danger-dark tw-border-redi-danger-dark hover:tw-bg-redi-danger-bg/80"
  const primaryClasses =
    " tw-text-redi-primary tw-bg-redi-primary tw-text-redi-light-bg hover:tw-bg-redi-primary-toggle hover:tw-border-redi-primary-toggle disabled:tw-bg-redi-placeholder disabled:tw-border-redi-placeholder disabled:tw-drop-shadow-none disabled:tw-cursor-not-allowed tw-border-redi-primary tw-drop-shadow-floating-blue"

  return (
    <button
      className={classNames(
        sharedClasses,
        (variant === "primary" || variant === "branded") && primaryClasses,
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
        {variant === "branded" && <Spirit className="tw-h-5 tw-ml-2.5" />}
      </span>
    </button>
  )
}
