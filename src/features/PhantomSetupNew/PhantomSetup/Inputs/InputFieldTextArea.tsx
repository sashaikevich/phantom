import React from "react"
import { useSetupContext } from "../../../../context/setupContext"

export interface InputFieldTextAreaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string
  required?: true
  id?: string
  mappedName: string
}
export const InputFieldTextArea = ({
  placeholder,
  required,
  id,
  mappedName,
  className: passedStyles,
  ...props
}: InputFieldTextAreaProps) => {
  const { changeHandler } = useSetupContext()
  return (
    <textarea
      {...(required && { required: true })}
      placeholder={placeholder}
      className={`tw-block tw-w-full tw-border tw-border-redi-borders tw-rounded-lg tw-text-redi-dark/80 tw-placeholder-redi-placeholder ${
        passedStyles || ""
      }`}
      id={id}
      name={mappedName}
      onChange={e => {
        changeHandler(mappedName!, e.target.value)
      }}
      rows={5}
      {...props}
    />
  )
}
