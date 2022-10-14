import React from "react"
import { classNames } from "../../../../utils"

export interface InputFieldTextProps
  extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string
  required?: true
  inline?: true
  width?: "sm" | "md" | "lg" | "full"
  smaller?: true
  id?: string
}
export const InputFieldText = ({
  placeholder,
  onChange,
  required,
  id,
  inline,
  smaller,
  width = "full",
  className: passedStyles,
  ...props
}: InputFieldTextProps) => {
  const inputWidth = {
    sm: "tw-w-24",
    md: "tw-w-64",
    lg: "tw-w-96",
    full: "tw-w-full",
  }

  return (
    <input
      className={classNames(
        "tw-border tw-border-redi-borders tw-text-redi-dark/80 tw-placeholder-redi-placeholder",
        inline ? "tw-inline" : "tw-block",
        inputWidth[width],
        smaller ? "tw-py-1 tw-px-1.5 tw-rounded-md" : "tw-w-full tw-rounded-lg",
        passedStyles || ""
      )}
      id={id}
      type="text"
      onChange={onChange}
      {...props}
      {...(required && { required: true })}
      placeholder={placeholder}
    />
  )
}
