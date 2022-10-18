import React from "react"
import { classNames } from "../../../../utils"
import { useSetupContext } from "../../../../context/setupContext"

export interface InputFieldNumberProps
  extends React.HTMLAttributes<HTMLInputElement> {
  mappedName: string
  max?: number
  min?: number
  placeholder?: string
  required?: true
  inline?: true
  smaller?: true
  id?: string
}
export const InputFieldNumber = ({
  mappedName,
  placeholder,
  required,
  inline,
  smaller,
  className: passedStyles,
  id,
  ...props
}: InputFieldNumberProps) => {
  const { updateField, data } = useSetupContext()

  return (
    <input
      className={classNames(
        "tw-border tw-border-redi-borders tw-text-redi-dark/80 tw-placeholder-redi-placeholder tw-w-24",
        inline ? "tw-inline" : "tw-block",
        smaller ? "tw-py-1 tw-px-1.5 tw-rounded-md" : "tw-w-full tw-rounded-lg",
        passedStyles || ""
      )}
      id={id}
      name={mappedName}
      value={data[mappedName].value}
      type="number"
      onChange={e => {
        updateField(mappedName, e.target.value)
      }}
      {...props}
      {...(required && { required: true })}
      placeholder={placeholder}
    />
  )
}
