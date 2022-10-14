import React from "react"

export interface InputFieldTextAreaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string
  required?: true
  id?: string
}
export const InputFieldTextArea = ({
  placeholder,
  onChange,
  required,
  id,
  className: passedStyles,
  ...props
}: InputFieldTextAreaProps) => {
  return (
    <textarea
      {...(required && { required: true })}
      placeholder={placeholder}
      className={`tw-block tw-w-full tw-border tw-border-redi-borders tw-rounded-lg tw-text-redi-dark/80 tw-placeholder-redi-placeholder ${
        passedStyles || ""
      }`}
      id={id}
      onChange={onChange}
      rows={5}
      {...props}
    />
  )
}
