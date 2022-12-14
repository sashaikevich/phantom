import React from "react"
import { useSetupContext } from "../../../contexts/setupContext"
import { classNames } from "../../../utils"
import { PhantomSetupKeys } from "../d"

export interface InputFieldTextAreaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  mappedName: PhantomSetupKeys
  placeholder?: string
  required?: true
  id?: string
}

export const InputFieldTextArea = ({
  placeholder,
  required,
  id,
  mappedName,
  className: passedStyles = "",
  ...props
}: InputFieldTextAreaProps) => {
  const { updateField, data } = useSetupContext()
  return (
    <textarea
      {...(required && { required: true })}
      placeholder={placeholder}
      className={classNames(
        "tw-block tw-w-full tw-border tw-border-redi-borders tw-rounded-lg tw-text-redi-dark/80 tw-placeholder-redi-placeholder",
        passedStyles
      )}
      id={id}
      name={mappedName}
      value={data[mappedName] as string}
      onChange={e => {
        updateField(mappedName, e.target.value)
      }}
      rows={5}
      {...props}
    />
  )
}
