import React, { LabelHTMLAttributes } from "react"
import { Text } from ".."
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  optional?: true
  labelSize?: "lg" | "md" | "sm"
}

export const Label = ({
  optional,
  labelSize = "lg",
  className: passedStyles,
  children,
  htmlFor,
  ...props
}: LabelProps) => {
  return (
    <label className={`tw-inline-block ${passedStyles || ""}`} htmlFor={htmlFor} {...(props && props)}>
      <Text variant={`label-${labelSize}`}>
        {children}
        {optional === true ? (
          <span className="tw-text-redi-placeholder tw-ml-1">(optional)</span>
        ) : null}
      </Text>
    </label>
  )
}
