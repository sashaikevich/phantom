import React from "react"
import { Label, LabelSizeType, InputFieldText, InputFieldTextArea } from "."
import { HelpLink, HelpLinkProps } from "../"
import { uid } from "../../../../utils"

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
  const forId = uid()
  return (
    <div className={`tw-flex tw-items-start ${passedStyles || ""}`}>
      {label && (
        <Label
          className="tw-mr-3 tw-w-36 tw-text-right tw-mt-1.5"
          labelSize="md"
          htmlFor={forId}
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
          id={forId}
          className="tw-w-full"
        />
        {helpLink && <HelpLink className="tw-mt-1" {...helpLink} />}
      </div>
    </div>
  )
}
