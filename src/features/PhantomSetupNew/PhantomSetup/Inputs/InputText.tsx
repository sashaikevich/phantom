import React from "react"
import {
  Label,
  LabelSizeType,
  InputFieldText,
  InputFieldTextArea,
} from "./index"
import { HelpLink, HelpLinkProps } from "../"
import { uid } from "../../../../utils"
import { updateFieldType } from "../../../../context/setupContext"
import { overrideTailwindClasses } from "tailwind-override"

interface InputTextProps
  extends React.HTMLAttributes<HTMLTextAreaElement | HTMLInputElement> {
  label?: string
  helpLink?: HelpLinkProps
  multiline?: boolean
  mappedName: string
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
  const forId = uid()
  return (
    <div className={overrideTailwindClasses(`tw-mb-9 ${passedStyles}`, {prefix: 'tw-'})}>
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
      {helpLink && <HelpLink className="tw-mt-1" {...helpLink} />}
    </div>
  )
}
