import React from "react"

export interface InputFieldTextAreaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string
  required?: true
}
export const InputFieldTextArea = ({
  placeholder,
  onChange,
  required,
  className: passedStyles,
  ...props
}: InputFieldTextAreaProps) => {
  return (
    <textarea
      {...(required && { required: true })}
      placeholder={placeholder}
      className={`tw-block tw-w-full tw-border tw-border-redi-borders tw-rounded-lg ${
        passedStyles || ""
      }`}
      onChange={onChange}
      rows={5}
      {...props}
    />
  )
}
