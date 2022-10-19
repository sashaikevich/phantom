import React, { LabelHTMLAttributes } from "react"
import { Text } from ".."
import { classNames } from "../../../../utils"

export type LabelSizeType = "lg" | "md" | "sm"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  optional?: true
  labelSize?: LabelSizeType
}

export const Label = ({
  optional,
  id,
  labelSize = "lg",
  className: passedStyles = "",
  children,
  htmlFor,
  ...props
}: LabelProps) => {
  return (
    <label
      className={classNames("tw-inline-block", passedStyles)}
      htmlFor={htmlFor}
      {...(props && props)}
    >
      <Text variant={`label-${labelSize}`}>
        {children}
        {optional === true ? (
          <span className="tw-text-redi-placeholder tw-ml-1">(optional)</span>
        ) : null}
      </Text>
    </label>
  )
}
