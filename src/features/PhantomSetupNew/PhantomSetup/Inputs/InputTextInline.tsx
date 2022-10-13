import React from "react"
import { Label, LabelSizeType, InputFieldText, InputFieldTextArea } from "."
import { HelpLink, HelpLinkProps } from "../"

interface InputTextInlineProps
  extends React.HTMLAttributes<HTMLTextAreaElement | HTMLInputElement> {
  label?: string
  layout?: "stacked" | "inline"
  helpLink?: HelpLinkProps
  required?: true
  // onChange?: () => void
}

export const InputTextInline = ({
  label = "",
  placeholder,
  helpLink,
  required,
  onChange,
  className: passedStyles,
  ...props
}: InputTextInlineProps) => {
  return (
    <div className={`tw-flex tw-items-center ${passedStyles || ""}`}>
      {label && (
        <Label
          className="tw-mr-4 tw-w-36 tw-text-right tw-pr-0"
          labelSize="md"
        >
          {label}
        </Label>
      )}
      <div className="tw-grow">
        <InputFieldText
          {...(required && { required: true })}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
          smaller
          className="tw-w-full"
        />
        {helpLink && <HelpLink className="tw-mt-1" {...helpLink} />}
      </div>
    </div>
  )
}
