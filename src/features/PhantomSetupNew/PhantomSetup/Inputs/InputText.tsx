import React from "react"
import { Label, LabelSizeType, InputFieldText, InputFieldTextArea } from "."
import { HelpLink, HelpLinkProps } from "../"

interface InputTextProps
  extends React.HTMLAttributes<HTMLTextAreaElement | HTMLInputElement> {
  label?: string
  helpLink?: HelpLinkProps
  multiline?: boolean
  // onChange?: () => void
}

interface RequiredInputTextProps extends InputTextProps {
  required?: true
  optional?: never
}
interface OptionalInputTextProps extends InputTextProps {
  optional?: true
  required?: never
}

export const InputText = ({
  label = "",
  placeholder,
  helpLink,
  required,
  optional,
  multiline,
  onChange,
  className: passedStyles,
  ...props
}: RequiredInputTextProps | OptionalInputTextProps) => {
  return (
    <div className={passedStyles || ""}>
      {label && (
        <Label className="tw-mb-1.5" {...(optional && { optional: true })}>
          {label}
        </Label>
      )}
      {multiline ? (
        <InputFieldTextArea
          {...(required && { required: true })}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <InputFieldText
          {...(required && { required: true })}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
      )}
      {helpLink && <HelpLink className="tw-mt-1" {...helpLink} />}
    </div>
  )
}
