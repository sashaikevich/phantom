import React from "react"
import { Label } from "."
import { HelpLink, HelpLinkProps } from "../"

interface InputTextProps
  extends React.HTMLAttributes<HTMLTextAreaElement | HTMLInputElement> {
  label?: string
  placeholder?: string
  helpLink?: HelpLinkProps
  multiline?: boolean
  onChange?: () => void
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
  const classes =
    "tw-block tw-w-full tw-border tw-border-redi-borders tw-rounded-lg"
  return (
    <div className={`${passedStyles || ""}`}>
      {label && (
        <Label className="tw-mb-1.5" {...(optional && { optional: true })}>
          {label}
        </Label>
      )}
      {multiline ? (
        <textarea
          className={classes}
          rows={5}
          onChange={onChange}
          {...(required && { required: true })}
          placeholder={placeholder}
          {...props}
        ></textarea>
      ) : (
        <input
          className={classes}
          type="text"
          onChange={onChange}
          {...props}
          {...(required && { required: true })}
          placeholder={placeholder}
        />
      )}
      {helpLink && <HelpLink className="tw-mt-1" {...helpLink} />}
    </div>
  )
}
