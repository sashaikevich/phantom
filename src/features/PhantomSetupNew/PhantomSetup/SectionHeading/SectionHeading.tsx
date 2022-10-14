import React, { ReactHTMLElement } from "react"
import { Text } from "../Text"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string | undefined
}

export const SectionHeading = ({
  children,
  className: passedStyles = "",
}: SectionHeadingProps) => {
  return (
    <div
      className={`tw-border-t tw-border-t-redi-primary-dark tw-mt-16 first:tw-mt-0 tw-pt-2.5 tw-mb-10 ${
        passedStyles || ""
      }`}
    >
      <Text el="h3" variant="section-title">
        {children}
      </Text>
    </div>
  )
}
