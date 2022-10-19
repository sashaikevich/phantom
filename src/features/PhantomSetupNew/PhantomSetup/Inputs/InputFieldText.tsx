import React from "react"
import { classNames } from "../../../../utils"
import { useSetupContext } from "../../../../context/setupContext"

export interface InputFieldTextProps
  extends React.HTMLAttributes<HTMLInputElement> {
  mappedName: string
  placeholder?: string
  required?: true
  inline?: true
  width?: "sm" | "md" | "lg" | "full"
  smaller?: true
  id?: string
}
export const InputFieldText = ({
  placeholder,
  required,
  id,
  inline,
  smaller,
  width = "full",
  mappedName,
  className: passedStyles = "",
  ...props
}: InputFieldTextProps) => {
  const { updateField, data } = useSetupContext()

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
        passedStyles
      )}
      id={id}
      name={mappedName}
      value={data[mappedName].value}
      type="text"
      onChange={e => {
        updateField(mappedName, e.target.value)
      }}
      {...props}
      {...(required && { required: true })}
      placeholder={placeholder}
    />
  )
}
