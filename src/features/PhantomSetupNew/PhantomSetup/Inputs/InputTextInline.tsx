import React from "react"
import { Label, LabelSizeType, InputFieldText, InputFieldTextArea } from "./index"
import { HelpLink, HelpLinkProps } from "../"
import { uid } from "../../../../utils"

interface InputTextInlineProps
  extends React.HTMLAttributes<HTMLTextAreaElement | HTMLInputElement> {
  label?: string
  layout?: "stacked" | "inline"
  helpLink?: HelpLinkProps
  required?: true
  mappedName: string
}

export const InputTextInline = ({
  label = "",
  placeholder,
  helpLink,
  required,
  className: passedStyles,
  mappedName,
  ...props
}: InputTextInlineProps) => {
  const forId = uid()
  return (
    <div
      className={`tw-flex tw-items-start tw-mb-2 last-of-type:tw-mb-0 ${
        passedStyles || ""
      }`}
    >
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
          placeholder={placeholder}
          {...props}
          smaller
          mappedName={mappedName}
          id={forId}
          className="tw-w-full"
        />
        {helpLink && <HelpLink className="tw-mt-1" {...helpLink} />}
      </div>
    </div>
  )
}
