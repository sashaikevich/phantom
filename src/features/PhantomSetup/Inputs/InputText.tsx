import React from "react"
import { Label, InputFieldText, InputFieldTextArea } from "./index"
import { HelpLink, HelpLinkProps } from "../HelpLink"
import { uid, classNames } from "../../../utils"
import { PhantomSetupKeys } from "../d"

interface InputTextProps
  extends React.HTMLAttributes<HTMLTextAreaElement | HTMLInputElement> {
  mappedName: PhantomSetupKeys
  label?: string
  helpLink?: HelpLinkProps
  multiline?: boolean
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
  mappedName,
  className: passedStyles = "",
  ...props
}: RequiredInputTextProps | OptionalInputTextProps) => {
  // add mappedName here and use uid as backup
  const forId = uid()
  return (
    <div className={classNames("tw-mb-9", passedStyles)}>
      {label && (
        <Label
          className="tw-mb-1.5"
          {...(optional && { optional: true })}
          htmlFor={forId}
        >
          {label}
        </Label>
      )}
      {multiline ? (
        <InputFieldTextArea
          {...(required && { required: true })}
          placeholder={placeholder}
          mappedName={mappedName}
          id={forId}
        />
      ) : (
        <InputFieldText
          {...(required && { required: true })}
          placeholder={placeholder}
          mappedName={mappedName}
          {...props}
          id={forId}
        />
      )}
      {helpLink && <HelpLink className="tw-mt-0" {...helpLink} />}
    </div>
  )
}
